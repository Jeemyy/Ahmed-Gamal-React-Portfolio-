import React, { useState, useEffect } from "react";
import "./style.css";
import "./media.css";

export default function Section1(){
      const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="sec1" id="sec1">
      <div className="container">
        <div className="body">
          <h1>I'm Ahmed Gamal</h1>
          <h3>Software Engineer</h3>
          <p>
            Get ready to learn programming from scratch the right way and join
            our private community to experience a unique educational journey
            full of practical applications
          </p>
          <div className="project">
            <a href="https://github.com/Jeemyy?tab=repositories">Project</a>
          </div>

          <div className="links">
            <a href="https://www.facebook.com/ahmedgmal.gmal.319">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/Jeemyy">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-gamal-86128a279/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="img1">
          <span
            id="left"
            style={{
              transition: "transform 2s ease",
              transform: scrolled ? "translateX(100%)" : "translateX(0%)",
            }}
          >
            {"{"}
          </span>
          <span
            id="right"
            style={{
              transition: "transform 2s ease",
              transform: scrolled ? "translateX(-130%)" : "translateX(0%)",
            }}
          >
            {"}"}
          </span>
          <img
            src="assets/file.png"
            alt=""
            id="home-img"
            style={{
              transition: "opacity 2s ease",
              opacity: scrolled ? 0 : 0.9,
            }}
          />
          <div className="line"></div>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
    </section>
  );
}
