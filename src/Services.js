import React from "react";

function Services() {
  return (
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
  );
}

export default Services;