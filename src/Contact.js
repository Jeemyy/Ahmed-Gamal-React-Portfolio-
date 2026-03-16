import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    try {
      const response = await fetch("https://laravelmyportfolioapi-production.up.railway.app/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ username: "", email: "", message: "" });
      } else {
        alert("Error: " + JSON.stringify(data.errors || data.message));
      }
    } catch (error) {
      alert("Network Error: " + error.message);
    }
  };

  return (
    <section className="sec5" id="sec5">
      <h1>Contact <span>Us</span></h1>

      <div className="contact">
        <div className="social">
          {/* ... نفس الـ social info كما عندك */}
        </div>

        <div className="msg">
          <form onSubmit={handleSubmit}>
            <h2>Message</h2>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;