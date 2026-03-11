import React from "react";

function About() {
  return (
    <section className="sec2" id="sec2">
      <div className="about" id="about">
        <h1>
          About <span>Me</span>
        </h1>

        <div className="page">
          <div className="photo">
            <img src="assets/photo1.jpeg" alt="" />
          </div>

          <div className="text">
            <p>
              <span>{"<"}</span> Software Engineer <span>{"/>"}</span>
            </p>

            <h4>
              Hello! I'm <span>Ahmed Gamal</span>, a passionate{" "}
              <span>Software Engineer</span> and graduate of the{" "}
              <span>Beni-Suef University of Technology</span> in collaboration
              with Korea, majoring in <span>Information Technology</span> with a
              specialization in software development.
              <br />
              <br />
              Over the years, I’ve gained extensive experience in{" "}
              <span>web development</span> and <span>web applications</span>,
              working on diverse projects that combine creativity and
              functionality. My expertise covers front-end technologies such as{" "}
              <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>,
              as well as back-end development using <span>PHP</span> and{" "}
              <span>MySQL</span> with the <span>Laravel</span> framework.
              <br />
              <br />
              In addition, I have strong proficiency in{" "}
              <span>Python programming</span>, and a solid understanding of{" "}
              <span>Linux systems</span>, <span>network fundamentals</span>, and{" "}
              <span>cybersecurity</span>. I’m always eager to explore new
              technologies, solve complex problems, and build efficient, secure
              digital solutions.
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
  );
}

export default About;