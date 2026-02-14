import React from "react";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section hero-animate">
      <div className="flex-1 space-y-5">
        <p className="text-xs tracking-[0.4em] uppercase opacity-60">
          // Hello_World
        </p>

        <h1 className="md:text-6xl font-bold uppercase tracking-tighter leading-none">
          I'm Jeffery.
        </h1>

        <p className="text-lg md:text-xl max-w-xl opacity-90 leading-relaxed">
          A Frontend Engineer with a background in Electrical Engineering. I
          used to build circuits that could blow a fuse; now I build React apps
          that won’t crash a browser. I specialize in fast, real-time web
          systems where logic is clean and performance is non-negotiable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button onClick={scrollToProjects} className="btn-primary-inverted">
            View Projects <ArrowRight size={20} />
          </button>

          <a
            href="/Jeffery_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FileText size={20} /> View Resume
          </a>
        </div>

        {/* Social Icons - Now part of the flex container to stay visible */}
        <div className="flex gap-8 pt-6">
          <a
            href="https://github.com/mariioox"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/jeffervokosun"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:okoehimare@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Picture Placeholder */}
      <div className="hidden md:flex flex-1 justify-end">
        <div className="jeffery-frame">
          <img
            src="/jeffery-photo.jpg"
            alt="Okosun J. Ehimare"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] opacity-30">
            [PHOTO_AREA]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
