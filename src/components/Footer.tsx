import { Mail, Phone } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const links = [
  { icon: GithubIcon, href: "https://github.com/Jeemyy", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ahmed-gamal-sayed/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ahmedgmal010909@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/201062166414", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ahmed Gamal. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
          >
            <l.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
