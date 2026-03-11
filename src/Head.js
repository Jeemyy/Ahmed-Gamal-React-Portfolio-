import React, { useState, useEffect } from "react";
import "./style.css";

export default function Head() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY;

      if (scrollPos < 600) setActive("home");
      else if (scrollPos < 1200) setActive("about");
      else if (scrollPos < 1770) setActive("services");
      else if (scrollPos < 2500) setActive("projects");
      else setActive("contact");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`head ${scrolled ? "scrolled" : ""}`} id="head">
      <div className="title">
        <span id="l">{"{"}</span>
        <span id="d">.</span>
        <a href="#sec1">Jemy</a>
        <span id="r">{"}"}</span>
      </div>

      <nav className="nav1">
        <a
          href="#sec1"
          onClick={() => setActive("home")}
          style={{ color: active === "home" ? "#00ffc3" : "rgb(0,183,255)" }}
        >
          Home
        </a>

        <a
          href="#sec2"
          onClick={() => setActive("about")}
          style={{ color: active === "about" ? "#00ffc3" : "white" }}
        >
          About
        </a>

        <a
          href="#sec3"
          onClick={() => setActive("services")}
          style={{ color: active === "services" ? "#00ffc3" : "white" }}
        >
          Services
        </a>

        <a
          href="#sec4"
          onClick={() => setActive("projects")}
          style={{ color: active === "projects" ? "#00ffc3" : "white" }}
        >
          Projects
        </a>

        <a
          href="#sec5"
          onClick={() => setActive("contact")}
          style={{ color: active === "contact" ? "#00ffc3" : "white" }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
