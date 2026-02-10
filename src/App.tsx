import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsExperience from "./components/SkillsExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="min-h-screen">
      <div className="scanline" />

      {/* Container for the Header to maintain max-width */}
      <div className="max-w-6xl mx-auto px-6">
        <Header theme={theme} toggle={toggle} />
      </div>

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <SkillsExperience />
        <Projects />
      </main>

      <div className="max-w-6xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  );
};

export default App;
