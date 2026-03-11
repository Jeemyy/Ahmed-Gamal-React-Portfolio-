import React, { useState, useEffect, useRef } from "react";
import "./style.css";
export default function Head() {
    
const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Refs لكل قسم
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);

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

  const scrollToSection = (ref, key) => {
    setActive(key);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`head ${scrolled ? "scrolled" : ""}`} id="head">
      <div className="title">
        <span id="l">{"{"}</span>
        <span id="d">.</span>
        <a href="#"> Jemy </a>
        <span id="r">{"}"}</span>
      </div>
      <nav className="nav1">
        <a
          href="#sec1"
          onClick={() => scrollToSection(sec1Ref, "home")}
          style={{ color: active === "home" ? "#00ffc3" : "rgb(0,183,255)" }}
        >
          Home
        </a>
        <a
          href="#sec2"
          onClick={() => scrollToSection(sec2Ref, "about")}
          style={{ color: active === "about" ? "#00ffc3" : "white" }}
        >
          About
        </a>
        <a
          href="#sec3"
          onClick={() => scrollToSection(sec3Ref, "services")}
          style={{ color: active === "services" ? "#00ffc3" : "white" }}
        >
          Services
        </a>
        <a
          href="#sec4"
          onClick={() => scrollToSection(sec4Ref, "projects")}
          style={{ color: active === "projects" ? "#00ffc3" : "white" }}
        >
          Projects
        </a>
        <a
          href="#sec5"
          onClick={() => scrollToSection(sec5Ref, "contact")}
          style={{ color: active === "contact" ? "#00ffc3" : "white" }}
        >
          Contact Us
        </a>
      </nav>

      {/* Refs placeholders */}
      <div ref={sec1Ref}></div>
      <div ref={sec2Ref}></div>
      <div ref={sec3Ref}></div>
      <div ref={sec4Ref}></div>
      <div ref={sec5Ref}></div>
    </header>
  );}
