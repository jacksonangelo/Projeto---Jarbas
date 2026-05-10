// Shared SVG icon set for service pages and the Services section.
// All icons: 24×24 viewBox · stroke="currentColor" · strokeWidth 2 · aria-hidden

type IconProps = { className?: string };

const base = (className = "w-full h-full") =>
  ({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
  }) as const;

export const IconChild = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21a8 8 0 0 0-16 0" />
    <path d="M19 2L19.6 3.4 21 4l-1.4.6L19 6l-.6-1.4L17 4l1.4-.6z" />
  </svg>
);

export const IconTeen = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <circle cx="10" cy="8" r="3.5" />
    <path d="M17 21a7 7 0 0 0-14 0" />
    <path d="M19 16V7" />
    <path d="M16.5 10l2.5-3 2.5 3" />
  </svg>
);

export const IconLeaf = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export const IconNodes = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="2" />
    <circle cx="5"  cy="5"  r="2" />
    <circle cx="19" cy="5"  r="2" />
    <circle cx="5"  cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
  </svg>
);

export const IconFamily = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <circle cx="8"  cy="7"  r="3.5" />
    <path d="M15 21a7 7 0 0 0-14 0" />
    <circle cx="19" cy="10" r="2.5" />
    <path d="M24 21a5 5 0 0 0-10 0" />
  </svg>
);

export const IconWaves = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <path d="M3 6 Q6 3 9 6 Q12 9 15 6 Q18 3 21 6" />
    <path d="M3 12 Q6 9 9 12 Q12 15 15 12 Q18 9 21 12" />
    <path d="M3 18 Q6 15 9 18 Q12 21 15 18 Q18 15 21 18" />
  </svg>
);

export const IconAssessment = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <rect x="3"  y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7"  width="4" height="14" rx="1" />
    <rect x="17" y="3"  width="4" height="18" rx="1" />
    <path d="M2 22h20" />
  </svg>
);

export const IconSparkle = ({ className }: IconProps = {}) => (
  <svg {...base(className)}>
    <path d="M12 3L13.5 9 20 12l-6.5 3L12 21l-1.5-6L4 12l6.5-3z" />
  </svg>
);
