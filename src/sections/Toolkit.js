import React from 'react';
import { toolkit } from '../data/toolkit';

export default function Toolkit() {
  return (
    <section id="toolkit" className="toolkit container" aria-labelledby="toolkit-title">
      <h2 id="toolkit-title">Toolkit</h2>
      <p className="toolkit-note">Linked labels show sources.</p>
      <div className="toolkit-groups">
        {toolkit.map(group => (
          <div className="toolkit-group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map(item => (
                <li key={item.label} className={item.href ? 'toolkit-linked' : undefined} title={!item.href ? item.evidence : undefined}>
                  {item.href ? (
                    <a href={item.href} aria-label={`${item.label}: ${item.evidence}`} title={item.evidence}>
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <p className="toolkit-context">Grad-CAM is an explainability method. Microsoft Visual Analytics and Oracle Academy are résumé-listed certification or training entries.</p> */}
    </section>
  );
}
