import React, { useState, useEffect } from "react";

export default function Head() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      const sections = [
        { id: "sec1", key: "home" },
        { id: "sec2", key: "about" },
        { id: "sec3", key: "services" },
        { id: "sec4", key: "projects" },
        { id: "sec5", key: "contact" },
      ];

      sections.forEach((section) => {

        const element = document.getElementById(section.id);

        if (element) {

          const rect = element.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(section.key);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <header className={`head ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}
      <div className="title">
        <span id="l">{"{"}</span>
        <span id="d">.</span>
        <a href="#sec1" onClick={() => handleClick("home")}>Jemy</a>
        <span id="r">{"}"}</span>
      </div>

      {/* Mobile Button */}
      <div className="toggle_btn" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* Desktop Navbar */}
      <nav className="nav1">

        <a
          href="#sec1"
          onClick={() => handleClick("home")}
          style={{ color: active === "home" ? "#00ffc3" : "white" }}
        >
          Home
        </a>

        <a
          href="#sec2"
          onClick={() => handleClick("about")}
          style={{ color: active === "about" ? "#00ffc3" : "white" }}
        >
          About
        </a>

        <a
          href="#sec3"
          onClick={() => handleClick("services")}
          style={{ color: active === "services" ? "#00ffc3" : "white" }}
        >
          Services
        </a>

        <a
          href="#sec4"
          onClick={() => handleClick("projects")}
          style={{ color: active === "projects" ? "#00ffc3" : "white" }}
        >
          Projects
        </a>

        <a
          href="#sec5"
          onClick={() => handleClick("contact")}
          style={{ color: active === "contact" ? "#00ffc3" : "white" }}
        >
          Contact Us
        </a>

      </nav>

      {/* Mobile Menu */}
      <div className={`dropdown_menu ${menuOpen ? "open" : ""}`}>

        <a
          href="#sec1"
          onClick={() => handleClick("home")}
          style={{ color: active === "home" ? "#00ffc3" : "white" }}
        >
          Home
        </a>

        <a
          href="#sec2"
          onClick={() => handleClick("about")}
          style={{ color: active === "about" ? "#00ffc3" : "white" }}
        >
          About
        </a>

        <a
          href="#sec3"
          onClick={() => handleClick("services")}
          style={{ color: active === "services" ? "#00ffc3" : "white" }}
        >
          Services
        </a>

        <a
          href="#sec4"
          onClick={() => handleClick("projects")}
          style={{ color: active === "projects" ? "#00ffc3" : "white" }}
        >
          Projects
        </a>

        <a
          href="#sec5"
          onClick={() => handleClick("contact")}
          style={{ color: active === "contact" ? "#00ffc3" : "white" }}
        >
          Contact Us
        </a>

      </div>

    </header>
  );
}