import React from "react";

// المشاريع كمصفوفة
const projects = [
  {
    img: "assets/projects/project1.png",
    title: "Fruitkha",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Fruitkha is a simple and fast e-commerce platform for buying food, tech products, and daily essentials.",
    github: "https://github.com/Jeemyy/Fruitkha",
  },
  {
    img: "assets/projects/project2.png",
    title: "Krencel",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Krencel is a food delivery platform that allows users to order meals from restaurants quickly and conveniently.",
    github: "https://github.com/Jeemyy/Krencel",
  },
  {
    img: "assets/projects/project3.png",
    title: "TimeZone",
    tools: ["PHP", "Laravel", "MySQL"],
    description:
      "Timezone is an e-commerce platform where users can browse and purchase watches, including luxury, sport, and classic styles.",
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    img: "assets/projects/project4.png",
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
    img: "assets/projects/project5.png",
    title: "TownTeam",
    tools: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    description:
      "TownTeam is an e-commerce platform for buying clothes, featuring an admin dashboard for managing products and orders.",
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    img: "assets/projects/project6.png",
    title: "BizConsult",
    tools: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    description:
      "A comprehensive Laravel-based business consulting platform with a bilingual interface, modern admin dashboard, and responsive front-end.",
    github: "https://github.com/Jeemyy/BizConsult",
  },
];

function Projects() {
  return (
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
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;