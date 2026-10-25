import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { projects, sourceUrl } from './data/projects';
import { filters } from './components/ProjectFilters';

global.IS_REACT_ACT_ENVIRONMENT = true;
let container;
let root;

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});
function render(path = '/') {
  window.history.replaceState({}, '', path);
  act(() => root.render(<App />));
}
function primaryCards() {
  return container.querySelectorAll('#portfolio > .container > .project-grid .project-card');
}

it('places the three résumé-supported internships before projects', () => {
  render();
  const sections = [...container.querySelector('main').querySelectorAll('section')];
  expect(sections.map(section => section.id)).toEqual(['resume', 'portfolio', 'about', 'toolkit', 'contact']);
  const jobs = [...container.querySelectorAll('.experience-meta')];
  expect(jobs).toHaveLength(3);
  expect(jobs[0].textContent).toContain('Singapore Tourism Board (STB)');
  expect(jobs[0].textContent).toContain('May 2026 – Aug 2026');
  expect(jobs[1].textContent).toContain('Z-Power Automation');
  expect(jobs[2].textContent).toContain('Defense Science Technology Agency (DSTA)');
});

it('keeps all seven projects in their card and every section anchor usable', () => {
  render();
  expect(primaryCards()).toHaveLength(7);
  expect(container.querySelector('.more-work')).toBeNull();
  expect(container.querySelector('[role="status"]').textContent).toContain('7 projects shown');
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute('href'))).not.toBeNull();
  }
});

it('filters all projects and restores the complete showcase', () => {
  render();
  const buttons = [...container.querySelectorAll('.filters button')];
  for (const filter of filters.slice(1)) {
    const button = buttons.find(item => item.textContent === filter.label);
    act(() => button.click());
    const expected = projects.filter(project => filter.categories.includes(project.category));
    expect(primaryCards()).toHaveLength(expected.length);
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(container.querySelector('[role="status"]').textContent).toContain(`${expected.length} `);
  }
  act(() => buttons[0].click());
  expect(primaryCards()).toHaveLength(7);
});

it('makes both requested HDB repositories available in the data filter', () => {
  render();
  const button = [...container.querySelectorAll('.filters button')].find(item => item.textContent === 'Data & visualization');
  act(() => button.click());
  for (const repo of ['adv', 'aa']) {
    expect(container.querySelector(`a[href="https://github.com/zow1e/${repo}"]`)).not.toBeNull();
  }
  expect(container.querySelector('#project-adv').textContent).toBe('HDB resale explorer');
  expect(container.querySelector('#project-aa').textContent).toBe('HDB dashboard experiments');
});

it('shows verified skill chips on every project card', () => {
  render();
  for (const project of projects) {
    const card = container.querySelector(`#project-${project.id}`).closest('article');
    const chips = [...card.querySelectorAll('.project-tools li')].map(chip => chip.textContent);
    expect(chips).toEqual(project.tools);
    expect(card.closest('.project-details')).toBeNull();
  }
});

it('preserves the legacy archive route and the software disclosure', () => {
  render('/zowie-portfolio/moreprojects');
  expect(primaryCards()).toHaveLength(7);
  expect(container.querySelector('[data-section="portfolio"]').open).toBe(true);
  expect(container.querySelector('.other-work').open).toBe(true);
  expect(container.querySelectorAll('.archive-grid article')).toHaveLength(3);
});

it('encodes notebook source URLs and keeps external links on real repository paths', () => {
  const nlp = projects.find(project => project.id === 'sentiment');
  expect(sourceUrl(nlp, nlp.links[0].path)).toBe('https://github.com/zow1e/AY22-y2/blob/main/NLP%20-%20modelling.ipynb');
  render();
  for (const link of container.querySelectorAll('.project-actions a')) {
    expect(link.href).toMatch(/^https:\/\/github.com\/zow1e\//);
    expect(link.href).not.toMatch(/\.png$|\.jpg$/);
  }
});

it('offers a way home for an unknown route', () => {
  render('/unknown');
  expect(container.querySelector('h1').textContent).toBe('Page not found');
  expect(container.querySelector('a')).not.toBeNull();
});


it('provides three independently expandable cards with one copy of each section', () => {
  render();
  const cards = [...container.querySelectorAll('.section-card')];
  expect(cards.map(card => card.querySelector('.section-card-title').textContent)).toEqual(['Experience', 'Projects', 'About']);
  expect(cards.every(card => !card.open)).toBe(true);
  act(() => { cards[0].open = true; cards[1].open = true; });
  expect(cards[0].open).toBe(true);
  expect(cards[1].open).toBe(true);
  act(() => { cards[0].open = false; });
  expect(cards[1].open).toBe(true);
  expect(container.querySelectorAll('#about')).toHaveLength(1);
  expect(container.querySelectorAll('#resume')).toHaveLength(1);
  expect(container.querySelectorAll('#portfolio')).toHaveLength(1);
  expect(container.querySelector('#contact').closest('.section-card')).toBeNull();
});

it('opens the matching card from navbar links without closing another card', () => {
  render();
  const experience = container.querySelector('[data-section="resume"]');
  const about = container.querySelector('[data-section="about"]');
  act(() => { experience.open = true; });
  act(() => container.querySelector('.navigation a[href="#about"]').click());
  expect(about.open).toBe(true);
  expect(container.querySelector('.navigation a[href="#about"]').getAttribute('aria-current')).toBe('location');
  expect(container.querySelectorAll('.navigation [aria-current]')).toHaveLength(1);
  expect(experience.open).toBe(true);
  act(() => { about.open = false; });
  act(() => container.querySelector('.navigation a[href="#about"]').click());
  expect(about.open).toBe(true);
  const toolkitLink = container.querySelector('.navigation a[href="#toolkit"]');
  act(() => toolkitLink.click());
  expect(toolkitLink.getAttribute('aria-current')).toBe('location');
  expect(container.querySelector('#toolkit').previousElementSibling.classList.contains('section-cards')).toBe(true);
  expect(about.open).toBe(true);
  expect(experience.open).toBe(true);
});

it('opens a card on a direct hash link and responds to hash changes', () => {
  render('/zowie-portfolio#portfolio');
  expect(container.querySelector('[data-section="portfolio"]').open).toBe(true);
  act(() => {
    window.history.replaceState({}, '', '/zowie-portfolio#resume');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
  expect(container.querySelector('[data-section="resume"]').open).toBe(true);
  expect(container.querySelector('.navigation a[href="#resume"]').getAttribute('aria-current')).toBe('location');
  expect(container.querySelector('[data-section="portfolio"]').open).toBe(true);
});
