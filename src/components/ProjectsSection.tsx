import { motion } from "framer-motion";

const projects = [
  {
    title: "COVID-19 Data Analytics Dashboard",
    description: "Developed a web-based dashboard using Python, Flask, HTML, CSS, and JavaScript. Displays COVID-19 cases, deaths, recoveries, and vaccination data with interactive charts, reports, and analytics from CSV/Excel datasets. Designed to work offline.",
    tags: ["Python", "Flask", "HTML/CSS", "JavaScript", "Data Viz"],
    gradient: "from-[hsl(174,72%,50%)] to-[hsl(200,80%,55%)]",
  },
  {
    title: "HTML Portfolio Website",
    description: "Created a personal portfolio using HTML and CSS, published using GitHub Pages. Showcases personal information, skills, and projects in a clean, professional layout.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    gradient: "from-[hsl(10,85%,62%)] to-[hsl(42,90%,58%)]",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient-primary">Projects</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Some of the projects I've worked on
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full`}
                  whileHover={{ scale: 2, opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
