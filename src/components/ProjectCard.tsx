import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  git: string;
  live: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  desc,
  features,
  tech,
  git,
  live,
}) => (
  <div className="project-card">
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
        <div className="flex gap-4">
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50"
          >
            <Github size={20} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <p className="text-sm mb-4 font-bold opacity-80 italic">{desc}</p>

      <ul className="project-bullets grow">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="project-tags mt-4">
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
