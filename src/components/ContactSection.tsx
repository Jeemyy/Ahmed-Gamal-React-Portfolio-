import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ahmedgmal010909@gmail.com", href: "mailto:ahmedgmal010909@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+20 1062166414", href: "https://wa.me/201062166414" },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt", href: "#" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Contact Me" subtitle="Let's work together" />
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          {contactInfo.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl glass shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Your name" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
          <input type="email" name="email" placeholder="Your email" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
          <textarea name="message" placeholder="Your message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none" />
          <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-glow disabled:opacity-50">
            <Send size={16} />
            {loading ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
