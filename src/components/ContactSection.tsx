import { motion } from "framer-motion";
import { Mail, MapPin, Github, GraduationCap } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "leo.alolod@mcclawis.edu.ph", href: "mailto:leo.alolod@mcclawis.edu.ph" },
  { icon: MapPin, label: "Location", value: "Philippines", href: undefined },
  { icon: Github, label: "GitHub", value: "leoalolod07", href: "https://github.com/leoalolod07" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Education */}
        <motion.div
          className="glass rounded-2xl p-8 mb-20 max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-secondary mx-auto mb-4 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="w-6 h-6 text-secondary-foreground" />
          </motion.div>
          <h3 className="font-display font-bold text-xl mb-1">📚 Education</h3>
          <p className="text-foreground font-semibold">Madridejos Community College</p>
          <p className="text-muted-foreground text-sm">Bachelor of Science in Information Technology</p>
          <p className="text-accent text-sm mt-1">2024 – Present</p>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's <span className="text-gradient-mixed">Connect</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {contactInfo.map((item, i) => {
            const Wrapper = item.href ? motion.a : motion.div;
            const linkProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={item.label}
                {...linkProps}
                className="glass rounded-2xl p-6 text-center block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: i === 0 ? "var(--glow-primary)" : i === 1 ? "var(--glow-accent)" : "var(--glow-secondary)",
                }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <motion.div
        className="text-center mt-24 text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2026 Leo Alolod. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
