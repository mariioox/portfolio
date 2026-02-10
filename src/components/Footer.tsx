import { Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-current flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex gap-6">
      <a href="https://github.com/mariioox" className="hover:invert">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/jeffervokosun" className="hover:invert">
        <Linkedin size={20} />
      </a>
      <a href="mailto:okoehimare@gmail.com" className="hover:invert">
        <Mail size={20} />
      </a>
    </div>
    <p className="text-[10px] opacity-50 tracking-widest">
      © 2026 OKOSUN EHIMARE JEFFERY. All rights reserved.{" "}
    </p>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hover:opacity-50"
    >
      <ArrowUpCircle size={20} />
    </button>
  </footer>
);

export default Footer;
