import { useState, useEffect } from "react";

/* ───────────────── DATA ───────────────── */
const personalInfo = {
  name: "Yiduo (Alex) Wang",
  tagline: "Economist × Technologist × Data Storyteller",
  bio: "I bridge the gap between economic thinking, data analytics, and technology. With a foundation in economics and computer science from UIUC, and a graduate focus on business analytics and technology management, I bring a cross-disciplinary perspective to every problem I tackle — from building Flask web apps to crafting Tableau dashboards that drive real business decisions.",
  location: "Dallas, TX",
  email: "alexw54181140@outlook.com",
  linkedin: "https://www.linkedin.com/in/yiduo-wang-b9b80b259",
  github: "https://github.com/Alex5418",
};

const timeline = [
  { year: "2020", title: "Started at UIUC", desc: "B.S. Economics with a Minor in Computer Science", type: "education" },
  { year: "2024", title: "Graduated UIUC", desc: "Completed undergrad — Econ major, CS minor", type: "education" },
  { year: "2024", title: "MS Technology Management", desc: "Gies College of Business, UIUC — BA & IT concentration", type: "education" },
  { year: "2025", title: "Balfour & Co", desc: "Data Analyst Intern — ERP digitalization, Power BI, Tableau", type: "work" },
  { year: "2025", title: "EarthX", desc: "Operations & E-commerce Specialist — Flask apps, Shopify, SOPs", type: "work" },
];

const education = [
  {
    school: "Gies College of Business, UIUC",
    degree: "M.S. Technology Management",
    period: "Aug 2024 — Dec 2025",
    concentration: "Business Analysis and IT",
    courses: [
      { name: "Enterprise Database Management", category: "ba", tools: ["SQL", "MongoDB"] },
      { name: "Consumer Analytics", category: "ba", tools: ["Python", "KNIME"] },
      { name: "Data Storytelling", category: "ba", tools: ["Tableau", "Power BI"] },
    ],
  },
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S. Economics, Minor in Computer Science",
    period: "Aug 2020 — May 2024",
    courses: [
      { name: "Data Structures (CS225)", category: "cs", tools: ["C++"], project: "cs225-final" },
      { name: "Applied Machine Learning in Economics", category: "cs", tools: ["Python", "ML"] },
      { name: "Intro to Computer Science", category: "cs", tools: ["C++"], project: "level-design" },
      { name: "Microeconomics", category: "econ", tools: [] },
      { name: "Macroeconomics", category: "econ", tools: [] },
      { name: "Econometrics", category: "econ", tools: ["R", "Stata"] },
      { name: "Statistics & Probability", category: "math", tools: ["R"] },
    ],
  },
];

const projects = {
  featured: [
    {
      id: "restaurant-analytics",
      title: "Restaurant Review Analytics & Strategy",
      desc: "Designed a full data pipeline in KNIME to parse JSON-format Yelp review data from MongoDB Atlas. Applied transformation techniques to identify key factors affecting customer satisfaction and developed visual dashboards to propose data-driven location strategies for new restaurants.",
      tags: ["MongoDB", "KNIME", "Tableau"],
      status: "completed",
      type: "course",
      from: "Enterprise Database Management",
    },
    {
      id: "covid-analysis",
      title: "COVID-19 Socio-Economic Impact Analysis",
      desc: "Analyzed correlations between COVID-19 case data and economic indicators (GDP, HDI) using Kaggle datasets. Implemented multiple ML models including Lasso Regression and Decision Trees to predict case trends across countries.",
      tags: ["Python", "Machine Learning", "Pandas"],
      status: "completed",
      type: "course",
      from: "Applied ML in Economics",
    },
    {
      id: "checkin-app",
      title: "Employee Check-in Web Application",
      desc: "Built a web-based employee check-in system using Python and Flask for EarthX factory operations. Streamlined daily attendance tracking and integrated with existing operational workflows.",
      tags: ["Python", "Flask", "Web Dev"],
      status: "completed",
      type: "work",
    },
    {
      id: "portfolio-chatbot",
      title: "RAG Portfolio Chatbot",
      desc: "An AI-powered assistant that lives on this website, capable of answering questions about my background, projects, and skills using Retrieval-Augmented Generation.",
      tags: ["Python", "Claude API", "RAG", "Vector DB"],
      status: "planned",
      type: "side",
    },
  ],
  archive: [
    {
      id: "cs225-final",
      title: "Airport Shortest Routes Finder",
      desc: "CS225 team final project. Built a graph-based system using OpenFlights data to find shortest routes between airports and rank the 10 most important airports globally.",
      tags: ["C++", "Graph Algorithms", "BFS/Dijkstra"],
      github: "https://github.com/Alex5418/Final-project",
      from: "Data Structures (CS225)",
    },
    {
      id: "level-design",
      title: "Game Level Design — Infinite Matrix",
      desc: "Course MPs exploring game level design concepts and infinite matrix implementations in C++.",
      tags: ["C++", "Game Dev"],
      github: "https://github.com/Alex5418/LevelDesignMP2LFS",
      from: "CS Course MP",
    },
  ],
};

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", detail: "Flask, Pandas, ML libraries" },
      { name: "SQL", detail: "MySQL, PostgreSQL, MongoDB" },
      { name: "R", detail: "Statistical analysis, econometrics" },
      { name: "C++", detail: "Data structures, algorithms" },
      { name: "Java", detail: "OOP fundamentals" },
    ],
  },
  {
    category: "Analytics & Visualization",
    items: [
      { name: "Tableau", detail: "Interactive dashboards" },
      { name: "Power BI", detail: "Enterprise reporting" },
      { name: "KNIME", detail: "Data pipelines, ETL" },
      { name: "Excel", detail: "Advanced modeling" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git / GitHub", detail: "Version control" },
      { name: "VS Code", detail: "Primary IDE" },
      { name: "Google Cloud", detail: "Cloud deployment" },
      { name: "PythonAnywhere", detail: "Web app hosting" },
    ],
  },
  {
    category: "Domain Knowledge",
    items: [
      { name: "Business Analytics", detail: "Consumer insights, strategy" },
      { name: "Economics", detail: "Micro/Macro, econometrics" },
      { name: "E-commerce", detail: "Shopify, cross-border ops" },
      { name: "ERP Systems", detail: "Baan ERP digitalization" },
    ],
  },
];

const categoryColors = {
  cs: { bg: "#e9456018", text: "#e94560", label: "CS" },
  ba: { bg: "#53348318", text: "#9575cd", label: "BA" },
  econ: { bg: "#0f346018", text: "#5a8abf", label: "Econ" },
  math: { bg: "#6b8f7118", text: "#6b8f71", label: "Math" },
};

const statusStyles = {
  completed: { bg: "#6b8f7120", text: "#6b8f71", label: "Completed" },
  "in-progress": { bg: "#e9456020", text: "#e94560", label: "In Progress" },
  planned: { bg: "#53348320", text: "#9575cd", label: "Coming Soon" },
};

const pages = ["Home", "About", "Education", "Projects", "Skills", "Contact"];

/* ───────────────── STYLES ───────────────── */
const font = "'Sora', 'DM Sans', system-ui, sans-serif";
const mono = "'JetBrains Mono', 'Fira Code', monospace";

const S = {
  page: {
    fontFamily: font,
    background: "#0a0a12",
    color: "#e8e8e8",
    minHeight: "100vh",
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(10,10,18,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid #1a1a2a",
    padding: "0 24px",
  },
  navInner: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
  },
  content: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
};

/* ───────────────── COMPONENTS ───────────────── */

function Badge({ children, bg, color }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 10,
      background: bg || "#1a1a2a", color: color || "#888",
      whiteSpace: "nowrap", letterSpacing: 0.3,
    }}>{children}</span>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      fontSize: 10, padding: "2px 7px", borderRadius: 4,
      background: "#0f346020", color: "#5a8abf",
      fontFamily: mono, whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ marginBottom: 24 }}>
        {subtitle && <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#e94560", margin: "0 0 4px", fontFamily: mono }}>{subtitle}</p>}
        <h2 style={{ fontSize: 26, fontWeight: 300, margin: 0, letterSpacing: -0.5 }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Card({ children, style: s, onClick, hover }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered && hover ? "#14142a" : "#0f0f1c",
        border: "1px solid " + (hovered && hover ? "#2a2a4a" : "#1a1a2a"),
        borderRadius: 12,
        padding: "18px 20px",
        transition: "all 0.2s",
        cursor: onClick ? "pointer" : "default",
        ...s,
      }}
    >{children}</div>
  );
}

/* ───────────────── PAGES ───────────────── */

function HomePage({ navigate }) {
  return (
    <div style={{ ...S.content, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center" }}>
      <div style={{
        animation: "fadeUp 0.8s ease forwards",
        opacity: 0,
      }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 5, color: "#e94560", marginBottom: 16, fontFamily: mono }}>
          Portfolio
        </p>
        <h1 style={{ fontSize: 48, fontWeight: 200, margin: "0 0 12px", letterSpacing: -1.5, lineHeight: 1.1 }}>
          {personalInfo.name}
        </h1>
        <p style={{ fontSize: 16, color: "#888", fontWeight: 300, marginBottom: 40, letterSpacing: 0.5 }}>
          {personalInfo.tagline}
        </p>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {["Economics", "Computer Science", "Business Analytics", "Data Visualization"].map((t) => (
            <span key={t} style={{
              fontSize: 11, padding: "5px 14px", borderRadius: 20,
              border: "1px solid #222", color: "#999",
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "View Projects", page: "Projects", primary: true },
            { label: "About Me", page: "About" },
            { label: "Get In Touch", page: "Contact" },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => navigate(btn.page)}
              style={{
                padding: "10px 24px", fontSize: 13, borderRadius: 8,
                border: btn.primary ? "none" : "1px solid #333",
                background: btn.primary ? "#e94560" : "transparent",
                color: btn.primary ? "#fff" : "#aaa",
                cursor: "pointer", fontFamily: font, fontWeight: 500,
                transition: "all 0.2s",
              }}
            >{btn.label}</button>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div style={{
        position: "absolute", top: 80, right: "5%", width: 300, height: 300,
        background: "radial-gradient(circle, #e9456008 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={S.content}>
      <Section title="About Me" subtitle="Background">
        <Card>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#ccc", margin: 0 }}>
            {personalInfo.bio}
          </p>
        </Card>
      </Section>

      <Section title="Journey" subtitle="Timeline">
        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div style={{ position: "absolute", left: 6, top: 4, bottom: 4, width: 1, background: "#1a1a2a" }} />
          {timeline.map((e, i) => (
            <div key={i} style={{ marginBottom: 24, position: "relative" }}>
              <div style={{
                position: "absolute", left: -25, top: 5, width: 11, height: 11, borderRadius: "50%",
                background: e.type === "work" ? "#e94560" : "#0f3460",
                border: "2px solid #0a0a12",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: "#e94560", fontFamily: mono, fontWeight: 600 }}>{e.year}</span>
                <Badge bg={e.type === "work" ? "#e9456018" : "#0f346018"} color={e.type === "work" ? "#e94560" : "#5a8abf"}>
                  {e.type}
                </Badge>
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{e.title}</div>
              <div style={{ fontSize: 13, color: "#888" }}>{e.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="Work">
        {[
          {
            company: "EarthX", title: "Operations & E-commerce Specialist", period: "Nov 2025 — Present", location: "Dallas, TX",
            bullets: [
              "Built a web-based employee check-in app using Python and Flask for factory operations",
              "Manage e-commerce listings on Shopify and coordinate with cross-border suppliers",
              "Drafted SOPs for machinery maintenance and production line efficiency",
              "Conducting market research and outreach for potential partnerships with US furniture brands",
            ],
          },
          {
            company: "Balfour & Co", title: "Data Analyst Intern (ERP Digitalization)", period: "May 2025 — Aug 2025", location: "Remote",
            bullets: [
              "Transformed legacy Baan ERP reports into structured digital formats for modern analytics",
              "Built interactive dashboards in Power BI, Tableau, and KNIME for real-time production monitoring",
              "Collaborated with cross-functional teams to translate operational requirements into actionable visualizations",
            ],
          },
        ].map((job) => (
          <Card key={job.company} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{job.company}</div>
                <div style={{ fontSize: 13, color: "#999" }}>{job.title}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#e94560", fontFamily: mono }}>{job.period}</div>
                <div style={{ fontSize: 11, color: "#666" }}>{job.location}</div>
              </div>
            </div>
            {job.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 13, color: "#bbb", lineHeight: 1.6 }}>
                <span style={{ color: "#333", flexShrink: 0 }}>{"\u2022"}</span>{b}
              </div>
            ))}
          </Card>
        ))}
      </Section>
    </div>
  );
}

function EducationPage() {
  const [filter, setFilter] = useState("all");
  const cats = ["all", "cs", "ba", "econ", "math"];

  return (
    <div style={S.content}>
      <Section title="Education" subtitle="Academic Background">
        {education.map((ed) => (
          <Card key={ed.school} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{ed.degree}</div>
                <div style={{ fontSize: 13, color: "#999" }}>{ed.school}</div>
                {ed.concentration && <div style={{ fontSize: 12, color: "#9575cd", marginTop: 4 }}>Concentration: {ed.concentration}</div>}
              </div>
              <span style={{ fontSize: 12, color: "#e94560", fontFamily: mono }}>{ed.period}</span>
            </div>
          </Card>
        ))}
      </Section>

      <Section title="Coursework" subtitle="Courses">
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "4px 14px", fontSize: 11, borderRadius: 16, cursor: "pointer",
                border: filter === c ? "1px solid #e94560" : "1px solid #222",
                background: filter === c ? "#e9456015" : "transparent",
                color: filter === c ? "#e94560" : "#777",
                textTransform: "uppercase", letterSpacing: 0.5, fontFamily: font,
              }}
            >{c === "all" ? "All" : categoryColors[c]?.label || c}</button>
          ))}
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          {education.flatMap((ed) =>
            ed.courses
              .filter((c) => filter === "all" || c.category === filter)
              .map((c) => {
                const cat = categoryColors[c.category] || { bg: "#1a1a2a", text: "#888", label: c.category };
                return (
                  <div key={c.name} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", background: "#0f0f1c", border: "1px solid #1a1a2a",
                    borderRadius: 8, gap: 12, flexWrap: "wrap",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                      <Badge bg={cat.bg} color={cat.text}>{cat.label}</Badge>
                      <span style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</span>
                      {c.project && (
                        <span style={{ fontSize: 10, color: "#e94560", cursor: "pointer" }}>
                          {"\u{1F517}"} View Project
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      {c.tools.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </Section>
    </div>
  );
}

function ProjectsPage() {
  const [tagFilter, setTagFilter] = useState("all");
  const allTags = ["all", ...new Set([
    ...projects.featured.flatMap((p) => p.tags),
    ...projects.archive.flatMap((p) => p.tags),
  ])];

  const filterFn = (p) => tagFilter === "all" || p.tags.includes(tagFilter);

  return (
    <div style={S.content}>
      <Section title="Projects" subtitle="What I Have Built">
        <p style={{ fontSize: 13, color: "#777", marginTop: -16, marginBottom: 20 }}>
          From classroom economics to building Flask apps and data pipelines.
        </p>

        <div style={{ display: "flex", gap: 5, marginBottom: 24, flexWrap: "wrap" }}>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTagFilter(t)}
              style={{
                padding: "3px 12px", fontSize: 10, borderRadius: 14, cursor: "pointer",
                border: tagFilter === t ? "1px solid #e94560" : "1px solid #1a1a2a",
                background: tagFilter === t ? "#e9456015" : "transparent",
                color: tagFilter === t ? "#e94560" : "#666",
                fontFamily: mono,
              }}
            >{t === "all" ? "All" : t}</button>
          ))}
        </div>
      </Section>

      {/* Featured */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 16 }}>{"\u2B50"}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#e94560" }}>Featured</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12 }}>
          {projects.featured.filter(filterFn).map((p) => {
            const st = statusStyles[p.status] || statusStyles.completed;
            return (
              <Card key={p.id} hover>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 8 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{p.title}</div>
                  <Badge bg={st.bg} color={st.text}>{st.label}</Badge>
                </div>
                <p style={{ fontSize: 12, color: "#999", lineHeight: 1.7, margin: "0 0 12px" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}>
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                {p.from && (
                  <div style={{ fontSize: 10, color: "#555" }}>
                    {p.type === "course" ? "\u{1F4DA}" : "\u{1F4BC}"} From: {p.from}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Archive */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 16 }}>{"\u{1F4DA}"}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#6b8f71" }}>Coursework Archive</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
          {projects.archive.filter(filterFn).map((p) => (
            <div key={p.id} style={{
              background: "#0c0c18", border: "1px solid #151528", borderRadius: 8,
              padding: "14px 16px",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
              <p style={{ fontSize: 11, color: "#888", lineHeight: 1.6, margin: "0 0 8px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 6 }}>
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 10, color: "#6b8f71" }}>{"\u{1F517}"} {p.from}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: "#555", textDecoration: "none" }}>
                    GitHub {"\u2197"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div style={S.content}>
      <Section title="Skills" subtitle="Tech Stack">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {skills.map((cat) => (
            <Card key={cat.category}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#e94560", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                {cat.category}
              </div>
              {cat.items.map((item) => (
                <div key={item.name} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#666" }}>{item.detail}</div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </Section>

      {/* GitHub Stats placeholder */}
      <Section title="GitHub Activity" subtitle="Open Source">
        <Card style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>{"\u{1F4BB}"}</div>
          <div style={{ fontSize: 14, color: "#888", marginBottom: 8 }}>
            GitHub contribution graph and language stats will be auto-generated here
          </div>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#e94560", textDecoration: "none" }}>
            View GitHub Profile {"\u2197"}
          </a>
        </Card>
      </Section>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={S.content}>
      <Section title="Get In Touch" subtitle="Contact">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {[
            { label: "Email", value: personalInfo.email, link: `mailto:${personalInfo.email}`, icon: "\u{1F4E7}" },
            { label: "LinkedIn", value: "Yiduo Wang", link: personalInfo.linkedin, icon: "\u{1F4BC}" },
            { label: "GitHub", value: "Alex5418", link: personalInfo.github, icon: "\u{1F4BB}" },
            { label: "Location", value: personalInfo.location, icon: "\u{1F4CD}" },
          ].map((c) => (
            <Card key={c.label} hover>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1, color: "#666", marginBottom: 4 }}>{c.label}</div>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#e94560", textDecoration: "none", fontWeight: 500 }}>
                  {c.value} {"\u2197"}
                </a>
              ) : (
                <div style={{ fontSize: 14, color: "#ccc", fontWeight: 500 }}>{c.value}</div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Download Resume" subtitle="PDF">
        <Card style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>{"\u{1F4C4}"}</div>
          <div style={{ fontSize: 14, color: "#888", marginBottom: 16 }}>
            Resume PDF download link will go here
          </div>
          <button style={{
            padding: "10px 28px", fontSize: 13, borderRadius: 8,
            border: "1px solid #e94560", background: "transparent",
            color: "#e94560", cursor: "pointer", fontFamily: font,
          }}>Download Resume</button>
        </Card>
      </Section>

      {/* Chatbot placeholder */}
      <Section title="AI Assistant" subtitle="Chat">
        <Card style={{
          background: "linear-gradient(135deg, #14142a, #0f0f1c)",
          border: "1px solid #e9456030",
          textAlign: "center", padding: 32,
        }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>{"\u{1F916}"}</div>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Portfolio Chatbot</div>
          <div style={{ fontSize: 13, color: "#888", marginBottom: 16, maxWidth: 400, margin: "0 auto 16px" }}>
            Ask me anything about Alex — education, projects, skills, or experience. Powered by RAG + Claude API.
          </div>
          <Badge bg="#53348325" color="#9575cd">Coming Soon</Badge>
        </Card>
      </Section>
    </div>
  );
}

/* ───────────────── MAIN APP ───────────────── */

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo?.(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home": return <HomePage navigate={navigate} />;
      case "About": return <AboutPage />;
      case "Education": return <EducationPage />;
      case "Projects": return <ProjectsPage />;
      case "Skills": return <SkillsPage />;
      case "Contact": return <ContactPage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div style={S.page}>
      {/* Import Sora font */}
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={S.nav}>
        <div style={S.navInner}>
          <span
            onClick={() => navigate("Home")}
            style={{ fontSize: 16, fontWeight: 600, cursor: "pointer", letterSpacing: -0.5 }}
          >
            <span style={{ color: "#e94560" }}>A</span>lex Wang
          </span>
          <div style={{ display: "flex", gap: 4 }}>
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => navigate(p)}
                style={{
                  padding: "6px 14px", fontSize: 12, borderRadius: 6,
                  border: "none", cursor: "pointer", fontFamily: font,
                  background: currentPage === p ? "#e9456018" : "transparent",
                  color: currentPage === p ? "#e94560" : "#777",
                  fontWeight: currentPage === p ? 600 : 400,
                  transition: "all 0.15s",
                }}
              >{p}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page content */}
      {renderPage()}

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1a1a2a", padding: "24px", textAlign: "center",
        fontSize: 11, color: "#444",
      }}>
        {"\u00A9"} 2025 Yiduo (Alex) Wang {"\u00B7"} Built with Next.js {"\u00B7"} Deployed on Vercel
      </footer>
    </div>
  );
}
