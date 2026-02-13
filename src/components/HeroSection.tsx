import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "hsl(10, 85%, 62%)" }}
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 40, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "hsl(174, 72%, 50%)" }}
        animate={{ x: [0, -80, 60, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-secondary"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          BSIT Student • Aspiring IT Specialist
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gradient-primary">Hello,</span>{" "}
          <span className="text-foreground">I'm</span>
          <br />
          <motion.span
            className="text-gradient-mixed"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            style={{ backgroundSize: "200% 200%" }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Leo Alolod
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A hardworking and motivated IT student passionate about web development, 
          data analytics, and technical support. Building useful systems one project at a time.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg font-semibold text-primary-foreground bg-gradient-primary glow-primary transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(10, 85%, 62%, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold border border-secondary text-secondary transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(174, 72%, 50%, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
