import React from 'react';

// Small, code-native pixel drawings: briefcase, code window, and profile.
const icons = {
  resume: [
    '............', '....1111....', '...11..11...', '...1....1...',
    '.1111111111.', '.1222222221.', '.1222222221.', '.1111111111.',
    '.1222112221.', '.1222222221.', '.1111111111.', '............',
  ],
  portfolio: [
    '............', '.1111111111.', '.1212122221.', '.1111111111.',
    '.1222222221.', '.1221221221.', '.1212222121.', '.1221221221.',
    '.1222222221.', '.1221111221.', '.1111111111.', '............',
  ],
  about: [
    '............', '....1111....', '...112211...', '...122221...',
    '...122221...', '....1111....', '............', '...111111...',
    '..11222211..', '.1122222211.', '.1111111111.', '............',
  ],
};

export default function SectionCard({ sectionId, label, number, defaultOpen = false, children }) {
  return (
    <details className={`section-card card-${sectionId}`} data-section={sectionId} open={defaultOpen || undefined}>
      <summary className="section-card-toggle">
        <span className="card-index" aria-hidden="true">{number}</span>
        <span className="section-card-title">{label}</span>
        <svg className="section-card-icon" viewBox="0 0 12 12" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
          {icons[sectionId].flatMap((row, y) => [...row].map((pixel, x) => pixel === '.' ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={pixel === '1' ? 'currentColor' : 'var(--icon-fill)'} />
          )))}
        </svg>
        <span className="section-card-action" aria-hidden="true">
          <span className="card-open-label">Open section</span>
          <span className="card-close-label">Close section</span>
          <span className="card-indicator">+</span>
        </span>
      </summary>
      <div className="section-card-content">{children}</div>
    </details>
  );
}
