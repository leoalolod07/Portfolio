import { motion } from "framer-motion";

const skills = [
  { name: "HTML, CSS, JavaScript", level: 85, color: "hsl(174, 72%, 50%)" },
  { name: "Basic Python Programming", level: 78, color: "hsl(10, 85%, 62%)" },
  { name: "Flask Framework (Python)", level: 72, color: "hsl(42, 90%, 58%)" },
  { name: "Web Development (Frontend & Backend Basics)", level: 80, color: "hsl(280, 70%, 55%)" },
  { name: "Data Visualization & Dashboards", level: 75, color: "hsl(174, 72%, 50%)" },
  { name: "Microsoft Office (Word, Excel, PowerPoint)", level: 90, color: "hsl(10, 85%, 62%)" },
  { name: "Computer Troubleshooting", level: 82, color: "hsl(42, 90%, 58%)" },
  { name: "Basic Networking", level: 70, color: "hsl(280, 70%, 55%)" },
  { name: "GitHub & Version Control", level: 74, color: "hsl(174, 72%, 50%)" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient-mixed">Skills</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Technologies & competencies I work with
        </motion.p>

        <div className="space-y-7">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold font-display text-sm md:text-base">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
