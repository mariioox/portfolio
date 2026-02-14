import React from "react";

const SkillsExperience: React.FC = () => {
  return (
    <section id="skills" className="info-section">
      {/* Left Column: Skillset */}
      <div>
        <h2 className="section-label">// Technical_Skillset</h2>

        <div className="skill-category">
          <h3>Frontend</h3>
          <p className="skill-list text-sm">
            React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3
          </p>
        </div>

        <div className="skill-category">
          <h3>Backend & Data</h3>
          <p className="skill-list">
            Supabase (PostgreSQL), RESTful APIs, Flask, SQLite, Realtime Sync
          </p>
        </div>

        <div className="skill-category">
          <h3>Tools & DevOps</h3>
          <p className="skill-list">
            Git/GitHub, Linux CLI, pnpm, Clerk Auth, Debugging
          </p>
        </div>

        <div className="skill-category">
          <h3>Engineering</h3>
          <p className="skill-list">
            C (Firmware), MATLAB, Circuit Design, PCB Prototyping
          </p>
        </div>
      </div>

      {/* Right Column: Experience */}
      <div>
        <h2 className="section-label">// Professional_Experience</h2>

        <div className="exp-item">
          <div className="exp-header">
            <h3 className="exp-company">VAAV Innovative Solutions</h3>
            <span className="exp-date">2024 — 2025</span>
          </div>
          <span className="exp-role">Software/Hardware Integration Intern</span>
          <ul className="exp-details">
            <li>
              Engineered the "PowerCube" series (500W, 1000W, 1500W), developing
              a portable solar-rechargeable energy storage system with
              integrated battery management (BMS).
            </li>
            <li>
              Programmed real-time sensor fusion for an automated wheelchair
              system using C, implementing obstacle detection and precise motor
              actuation.
            </li>
            <li>
              Collaborated on bridging hardware protocols with user-facing
              control interfaces to ensure real-time data visualization and
              system reliability.
            </li>
          </ul>
        </div>

        <div className="exp-item">
          <div className="exp-header">
            <h3 className="exp-company">Don Bosco Science Academy </h3>
            <span className="exp-date">2019 — 2020</span>
          </div>
          <span className="exp-role">Teaching Intern</span>
          <ul className="exp-details">
            <li>
              Translated complex mathematical and engineering concepts into
              digestible learning modules for senior secondary students.
            </li>
            <li>
              Managed technical calibration and maintenance of school
              laboratories, ensuring electronic kits were ready for practical
              student experimentation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
