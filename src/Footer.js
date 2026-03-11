import React from "react";
// روابط التواصل الاجتماعي
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

export default function Footer() {
  return (
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
    </footer>
  );
}
