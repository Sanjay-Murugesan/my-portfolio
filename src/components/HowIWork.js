import React, { useEffect, useRef, useState, useCallback } from "react";
import "./HowIWork.css";

/* ── Data ─────────────────────────────────────────────────── */
const CARDS = [
  {
    id: "understand",
    step: "Step 01",
    icon: "🧠",
    iconVariant: "purple",
    cardVariant: "purple",
    title: "Problem Understanding",
    body: "I analyze problems deeply, break them into logical steps, and plan structured solutions before writing a single line of code.",
    category: "thinking",
    size: "big",
    extras: {
      type: "progress",
      items: [
        { label: "Requirement Analysis", pct: 94, variant: "purple" },
        { label: "Solution Planning",    pct: 88, variant: "teal"   },
        { label: "Risk Assessment",      pct: 80, variant: "pink"   },
      ],
    },
    expand: "I start every project with a thorough problem-mapping session — identifying edge cases, system constraints, and success criteria before opening any editor.",
  },
  {
    id: "design",
    step: "Step 02",
    icon: "🎨",
    iconVariant: "pink",
    cardVariant: "glass",
    title: "UI / UX Design Thinking",
    body: "Responsive, clean, and user-friendly interfaces with sharp focus on usability and visual balance.",
    category: "frontend",
    size: "normal",
    extras: {
      type: "tags",
      items: [
        { label: "Figma",       variant: "pink"   },
        { label: "CSS Grid",    variant: "pink"   },
        { label: "Responsive",  variant: "purple" },
        { label: "A11y",        variant: "purple" },
      ],
    },
    expand: "Every pixel is intentional. I prototype in Figma first, validate on real devices, then implement with semantic HTML and accessible CSS.",
  },
  {
    id: "integration",
    step: "Step 05",
    icon: "🔗",
    iconVariant: "amber",
    cardVariant: "glass",
    title: "System Integration",
    body: "Connecting frontend and backend seamlessly for efficient, reliable data flow and peak performance.",
    category: "backend",
    size: "normal",
    extras: {
      type: "tags",
      items: [
        { label: "REST",        variant: "teal"  },
        { label: "WebSockets",  variant: "teal"  },
        { label: "Auth / JWT",  variant: "amber" },
      ],
    },
    expand: "I build typed API contracts (OpenAPI) shared between both layers, eliminating integration surprises.",
  },
  {
    id: "backend",
    step: "Step 03",
    icon: "⚙️",
    iconVariant: "teal",
    cardVariant: "dark",
    title: "Backend Development",
    body: "Secure REST APIs with Java & Spring Boot and efficient database management built for scale.",
    category: "backend",
    size: "wide",
    extras: {
      type: "split-tags",
      left: [
        { label: "Java",        variant: "teal" },
        { label: "Spring Boot", variant: "teal" },
        { label: "Hibernate",   variant: "teal" },
      ],
      right: [
        { label: "MySQL",       variant: "amber" },
        { label: "PostgreSQL",  variant: "amber" },
        { label: "Redis",       variant: "amber" },
      ],
    },
    expand: "I follow SOLID principles, design layered architectures (Controller → Service → Repository), and secure every endpoint with Spring Security.",
  },
  {
    id: "testing",
    step: "Step 04",
    icon: "🧪",
    iconVariant: "amber",
    cardVariant: "glass",
    title: "Testing & Optimization",
    body: "Thorough testing, precise debugging, and performance tuning for bulletproof applications.",
    category: "quality",
    size: "normal",
    extras: {
      type: "tags",
      items: [
        { label: "JUnit",    variant: "amber"  },
        { label: "Mockito",  variant: "amber"  },
        { label: "Postman",  variant: "purple" },
        { label: "Lighthouse", variant: "purple" },
      ],
    },
    expand: "I target ≥85% unit test coverage, profile with JProfiler, and run Lighthouse audits to ensure sub-2s load times.",
  },
  {
    id: "growth",
    step: "Step 06",
    icon: "🚀",
    iconVariant: "purple",
    cardVariant: "teal",
    title: "Continuous Improvement",
    body: "Constantly absorbing modern tools, patterns, and best practices to level up with every project.",
    category: "thinking",
    size: "big",
    extras: {
      type: "stats",
      items: [
        { num: "3+",  desc: "Years exp." },
        { num: "20+", desc: "Projects"   },
        { num: "∞",   desc: "Curiosity"  },
      ],
    },
    expand: "I follow engineering blogs, contribute to open source, and experiment with new frameworks in side projects every quarter.",
  },
];

const FILTERS = ["All", "Frontend", "Backend", "Thinking", "Quality"];

/* ── Sub-components ──────────────────────────────────────── */
function ProgressExtras({ items, animate }) {
  return (
    <div>
      {items.map((item) => (
        <div className="hw-progress-item" key={item.label}>
          <div className="hw-progress-meta">
            <span>{item.label}</span>
            <span>{item.pct}%</span>
          </div>
          <div className="hw-progress-track">
            <div
              className={`hw-progress-fill hw-progress-fill--${item.variant}`}
              style={{ width: animate ? `${item.pct}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="hw-tags">
      {items.map((t) => (
        <span key={t.label} className={`hw-tag hw-tag--${t.variant}`}>
          {t.label}
        </span>
      ))}
    </div>
  );
}

function StatsExtras({ items }) {
  return (
    <div className="hw-stat-row">
      {items.map((s) => (
        <div className="hw-stat" key={s.desc}>
          <span className="hw-stat-num">{s.num}</span>
          <span className="hw-stat-desc">{s.desc}</span>
        </div>
      ))}
    </div>
  );
}

function SplitTags({ left, right }) {
  return (
    <div className="hw-wide-split" style={{ marginTop: "14px" }}>
      <div className="hw-wide-left">
        <p className="hw-stack-label">Language &amp; Framework</p>
        <TagList items={left} />
      </div>
      <div className="hw-wide-right">
        <p className="hw-stack-label">Databases &amp; Cache</p>
        <TagList items={right} />
      </div>
    </div>
  );
}

/* ── Dot grid decoration ─────────────────────────────────── */
function DotGrid() {
  return (
    <div className="hw-dot-grid">
      {Array.from({ length: 25 }).map((_, i) => (
        <div className="hw-dot" key={i} />
      ))}
    </div>
  );
}

/* ── Single Card ─────────────────────────────────────────── */
function HowCard({ card, index, active, onToggle }) {
  const ref = useRef(null);
  const [visible, setVisible]   = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            setTimeout(() => setAnimated(true), 600);
          }, index * 90);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const { extras } = card;

  const renderExtras = () => {
    if (extras.type === "progress")
      return <ProgressExtras items={extras.items} animate={animated} />;
    if (extras.type === "tags")
      return <TagList items={extras.items} />;
    if (extras.type === "stats")
      return <StatsExtras items={extras.items} />;
    if (extras.type === "split-tags")
      return <SplitTags left={extras.left} right={extras.right} />;
    return null;
  };

  const classNames = [
    "hw-card",
    `hw-card--${card.cardVariant}`,
    card.size === "big"  ? "big"  : "",
    card.size === "wide" ? "wide" : "",
    visible ? "hw-visible"   : "",
    active  ? "hw-card--active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classNames} onClick={onToggle}>
      {(card.id === "understand" || card.id === "growth") && (
        <>
          <div className="hw-glow-orb hw-glow-orb--purple" />
          <div className="hw-glow-orb hw-glow-orb--teal"   />
          <DotGrid />
        </>
      )}

      <span className="hw-step-badge">{card.step}</span>

      <div className={`hw-icon-wrap hw-icon-wrap--${card.iconVariant}`}>
        {card.icon}
      </div>

      <h3>{card.title}</h3>
      <p>{card.body}</p>

      {(extras.type === "progress" || extras.type === "stats") && (
        <div className="hw-divider" />
      )}

      {renderExtras()}

      {/* Expandable detail on click */}
      <div className="hw-expand">
        <div className="hw-divider" style={{ marginTop: "18px" }} />
        <p style={{ fontSize: "13px", color: "var(--clr-muted)", lineHeight: 1.7, margin: 0 }}>
          {card.expand}
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */
function HowIWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCard,   setActiveCard]   = useState(null);

  const filteredCards = activeFilter === "All"
    ? CARDS
    : CARDS.filter((c) => c.category === activeFilter.toLowerCase());

  const handleToggle = useCallback((id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="hw-root">
      <section className="hw-section">

        {/* Header */}
        <div className="hw-header">
          <p className="hw-eyebrow">
            <span /> Workflow <span />
          </p>
          <h2 className="hw-title">
            How I <em>Work</em>
          </h2>
          <p className="hw-subtitle">
            From first principles to finished product — click any card to learn more
          </p>
        </div>

        {/* Filter tabs */}
        <div className="hw-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`hw-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => {
                setActiveFilter(f);
                setActiveCard(null);
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="hw-grid">
          {filteredCards.map((card, i) => (
            <HowCard
              key={card.id}
              card={card}
              index={i}
              active={activeCard === card.id}
              onToggle={() => handleToggle(card.id)}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

export default HowIWork;