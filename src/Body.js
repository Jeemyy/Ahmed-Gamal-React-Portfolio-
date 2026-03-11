import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./media.css";

const projects = [
  {
    img: "/assets/projects/project1.png",
    title: "Fruitkha",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Fruitkha is a simple and fast e-commerce platform for buying food, tech products, and daily essentials.",
    github: "https://github.com/Jeemyy/Fruitkha",
  },
  {
    img: "/assets/projects/project2.png",
    title: "Krencel",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Krencel is a food delivery platform that allows users to order meals from restaurants quickly and conveniently.",
    github: "https://github.com/Jeemyy/Krencel",
  },
  {
    img: "/assets/projects/project3.png",
    title: "TimeZone",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Timezone is an e-commerce platform where users can browse and purchase watches, including luxury, sport, and classic styles.",
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    img: "/assets/projects/project4.png",
    title: "SignSpeak",
    tools: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React js",
    ],
    description:
      "SignSpeak is a platform that translates spoken language into sign language using a 3D model, helping communication for the deaf and mute.",
    github: "https://github.com/Jeemyy/SignSpeak_Finish",
  },
  {
    img: "/assets/projects/project5.png",
    title: "TownTeam",
    tools: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    description:
      "TownTeam is an e-commerce platform for buying clothes, featuring an admin dashboard for managing products and orders.",
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    img: "/assets/projects/project6.png",
    title: "BizConsult",
    tools: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    description:
      "A comprehensive Laravel-based business consulting platform with a bilingual interface, modern admin dashboard, and responsive front-end.",
    github: "https://github.com/Jeemyy/BizConsult",
  },
];

const contactInfo = [
  {
    type: "E-mail",
    icon: "fa-solid fa-envelope",
    value: "ahmedgmal010909@gmail.com",
    link: "mailto:ahmedgmal010909@gmail.com",
  },
  {
    type: "Whatsapp",
    icon: "fa-brands fa-whatsapp",
    value: "+201062166414",
    link: "tel:+201062166414",
  },
];

const socialLinks = [
  {
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com/ahmedgmal.gmal.319",
  },
  { icon: "fa-brands fa-instagram", link: "#" },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/ahmed-gamal-86128a279/",
  },
  { icon: "fa-brands fa-github", link: "https://github.com/Jeemyy" },
];

// روابط القائمة
const menuLinks = [
  { name: "Home", href: "#sec1" },
  { name: "About Me", href: "#sec2" },
  { name: "Services", href: "#sec3" },
  { name: "Projects", href: "#sec4" },
  { name: "Contact Me", href: "#sec5" },
];

export default function Body() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup عند unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
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
      {/* Section 1 */}
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
              src="./assets/file.png"
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
      {/* About */}
      <section className="sec2" id="sec2">
        <div className="about" id="about">
          <h1>
            About <span>Me</span>
          </h1>

          <div className="page">
            <div className="photo">
              <img src="/assets/photo1.jpeg" alt="" />
            </div>

            <div className="text">
              <p>
                <span>{"<"}</span> Software Engineer <span>{"/>"}</span>
              </p>

              <h4>
                Hello! I'm <span>Ahmed Gamal</span>, a passionate{" "}
                <span>Software Engineer</span> and graduate of the{" "}
                <span>Beni-Suef University of Technology</span> in collaboration
                with Korea, majoring in <span>Information Technology</span> with
                a specialization in software development.
                <br />
                <br />
                Over the years, I’ve gained extensive experience in{" "}
                <span>web development</span> and <span>web applications</span>,
                working on diverse projects that combine creativity and
                functionality. My expertise covers front-end technologies such
                as <span>HTML</span>, <span>CSS</span>, and{" "}
                <span>JavaScript</span>, as well as back-end development using{" "}
                <span>PHP</span> and <span>MySQL</span> with the{" "}
                <span>Laravel</span> framework.
                <br />
                <br />
                In addition, I have strong proficiency in{" "}
                <span>Python programming</span>, and a solid understanding of{" "}
                <span>Linux systems</span>, <span>network fundamentals</span>,
                and <span>cybersecurity</span>. I’m always eager to explore new
                technologies, solve complex problems, and build efficient,
                secure digital solutions.
              </h4>

              <button
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1wvnhWxF5SKEoddYspg0AQsTdQOXXUgsL/view")
                }
              >
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">My CV</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="sec3" id="sec3">
        <div className="container">
          <h1 className="section-title">Services</h1>

          <div className="all-card">
            {/* Card 1 */}
            <div className="card card-1">
              <i className="fa-solid fa-code"></i>

              <h3>
                <span>{"<"}</span> Web Development <span>{"/>"}</span>
              </h3>

              <p>
                I develop complete web solutions using HTML, CSS, JavaScript,
                React, PHP, Laravel, and MySQL — ensuring scalability, high
                performance, and a great user experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card card-1">
              <i className="fa-solid fa-pen"></i>

              <h3>
                <span>{"<"}</span> Backend Development <span>{"/>"}</span>
              </h3>

              <p>
                Expert in PHP and Laravel development, with extensive experience
                in MySQL, RESTful API design, MVC architecture, secure session
                management, and authentication systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card card-1">
              <i className="fa-solid fa-shield-halved"></i>

              <h3>
                <span>{"<"}</span> Security & Testing <span>{"/>"}</span>
              </h3>

              <p>
                With experience in ethical hacking and penetration testing, I
                analyze applications to identify vulnerabilities and apply
                security best practices for protection and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="sec4" id="sec4">
        <div className="container">
          <div className="title">
            <p>
              <span>My</span> Projects
            </p>
          </div>

          <div className="all-cards">
            {projects.map((p, index) => (
              <div className="card" key={index}>
                <img src={p.img} alt={p.title} />
                <div className="content">
                  <div className="all-tools">
                    {p.tools.map((tool, i) => (
                      <span className="tool" key={i}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="body-content">
                    <p id="title" className="text-2xl">
                      {p.title}
                    </p>
                    <p id="body">{p.description}</p>
                  </div>

                  <div className="links">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Me */}
      <section className="sec5" id="sec5">
        <h1>
          Contact <span>Us</span>
        </h1>

        <div className="contact">
          {/* Social Info */}
          <div className="social">
            {contactInfo.map((c, index) => (
              <div className={c.type.toLowerCase()} key={index}>
                <div id="i">
                  <a href={c.link} target="_blank" rel="noopener noreferrer">
                    <i className={c.icon}></i>
                  </a>
                </div>
                <div className="info">
                  <h3>{c.type}</h3>
                  <p>{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="msg">
            <form action="#">
              <h2>Message</h2>
              <div className="input-box">
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="E-mail" />
                <textarea
                  name="message"
                  placeholder="Your Message..."
                ></textarea>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        {/* Social Icons */}
        <ul className="social_icone">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Links */}
        <ul className="menu">
          {menuLinks.map((menu, index) => (
            <li key={index}>
              <a href={menu.href}>{menu.name}</a>
            </li>
          ))}
        </ul>

        <p>Copyright @ 2024 Ahmed Gamal, All Rights Reserved</p>
      </footer>{" "}
    </>
  );
}
