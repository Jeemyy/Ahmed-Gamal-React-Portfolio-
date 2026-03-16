import React from 'react';

// بيانات الاتصال الثابتة
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

function Contact() {
  return (
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
              <textarea name="message" placeholder="Your Message..."></textarea>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;