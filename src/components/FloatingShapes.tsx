import { motion } from "framer-motion";

const shapes = [
  { type: "circle", size: 60, color: "hsl(10, 85%, 62%)", x: "10%", y: "20%", duration: 6 },
  { type: "square", size: 40, color: "hsl(174, 72%, 50%)", x: "80%", y: "15%", duration: 7 },
  { type: "triangle", size: 50, color: "hsl(42, 90%, 58%)", x: "70%", y: "70%", duration: 8 },
  { type: "circle", size: 30, color: "hsl(280, 70%, 55%)", x: "20%", y: "75%", duration: 5 },
  { type: "square", size: 25, color: "hsl(10, 85%, 62%)", x: "50%", y: "10%", duration: 9 },
  { type: "circle", size: 45, color: "hsl(174, 72%, 50%)", x: "90%", y: "50%", duration: 6.5 },
  { type: "triangle", size: 35, color: "hsl(42, 90%, 58%)", x: "5%", y: "50%", duration: 7.5 },
  { type: "square", size: 20, color: "hsl(280, 70%, 55%)", x: "40%", y: "85%", duration: 5.5 },
];

const ShapeElement = ({ type, size, color }: { type: string; size: number; color: string }) => {
  if (type === "circle") {
    return (
      <div
        className="rounded-full"
        style={{ width: size, height: size, background: color, opacity: 0.15 }}
      />
    );
  }
  if (type === "square") {
    return (
      <div
        className="rounded-sm"
        style={{ width: size, height: size, background: color, opacity: 0.12, transform: "rotate(45deg)" }}
      />
    );
  }
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        opacity: 0.12,
      }}
    />
  );
};

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 10, -5, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShapeElement type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
