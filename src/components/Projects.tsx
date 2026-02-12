import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Q-Line",
    desc: "Real-time Digital Queue Management System",
    features: [
      "Built a virtualization engine for physical lines using Supabase Realtime to update positions instantly.",
      "Engineered a secure multi-role dashboard for vendors to manage queues and customers to track status.",
      "Optimized frontend performance to handle high-frequency data streams with zero UI flickering.",
    ],
    tech: ["React", "TypeScript", "Supabase", "Clerk"],
    git: "https://github.com/mariioox/queue",
    live: "https://queue-eosin.vercel.app/",
  },
  {
    title: "Jeffery.Sys (Portfolio)",
    desc: "Minimalist Engineering-focused Professional Site",
    features: [
      "Custom theme-switching engine built with CSS Variables and Data Attributes.",
      "Responsive 'Typewriter' aesthetic strictly following a performance-first architecture.",
      "Modular TypeScript structure ensures clean separation of concerns and type safety.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Lucide"],
    git: "https://github.com/mariioox/portfolio",
    live: "https://ehimareokosun.vercel.app/",
  },
  {
    title: "Weather API",
    desc: "Meteorological Data Visualization App",
    features: [
      "Engineered an async data-fetching pipeline to handle real-time meteorological JSON from OpenWeather.",
      "Implemented adaptive UI logic that alters visual states based on environmental weather variables.",
      "Focused on robust error handling and API request optimization.",
    ],
    tech: ["React", "JavaScript", "REST API", "CSS3"],
    git: "https://github.com/mariioox/weatherapp",
    live: "https://weather-atm.vercel.app/",
  },
  {
    title: "Expense Tracker",
    desc: "Finance Management & Data Persistence Tool",
    features: [
      "Designed a dynamic accounting dashboard with categorized expenditure tracking.",
      "Developed local persistence logic to maintain user state across sessions without a backend database.",
      "Calculated real-time balance analytics using optimized React state management.",
    ],
    tech: ["React", "TypeScript", "Local Storage"],
    git: "https://github.com/mariioox/expensetracker",
    live: "https://xpens-rho.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-current">
      <h2 className="section-label mb-12 uppercase tracking-[0.4em] opacity-50 text-xs font-bold">
        // Project_Output
      </h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
