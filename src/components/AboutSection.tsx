import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative flex justify-center">
            <motion.div
              className="w-72 h-72 md:w-96 md:h-96 bg-gradient-mixed animate-morph"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-4 bg-card rounded-full animate-morph flex items-center justify-center"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-6xl">👨‍💻</span>
            </motion.div>
          </div>

          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About <span className="text-gradient-primary">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a hardworking and motivated IT student who enjoys learning new technologies 
                and building useful systems. I am interested in web development, data analytics, 
                and technical support. I am eager to gain experience and continue improving my 
                skills to become a successful IT professional in the future.
              </p>

              <div className="glass rounded-xl p-5">
                <h3 className="font-display font-semibold text-accent mb-2">🎯 Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I am a passionate BSIT student seeking opportunities to enhance my technical skills 
                  and gain real-world experience in the IT industry. My goal is to become a professional 
                  IT specialist, particularly in Help Desk Support and system development, where I can 
                  contribute my knowledge in programming, troubleshooting, and web development while 
                  continuously learning and improving my skills.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Course", value: "BSIT" },
                { label: "Year", value: "2nd Year" },
                { label: "School", value: "MCC" },
                { label: "Since", value: "2024" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  whileHover={{ scale: 1.05, boxShadow: "var(--glow-primary)" }}
                >
                  <div className="text-2xl font-display font-bold text-gradient-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
