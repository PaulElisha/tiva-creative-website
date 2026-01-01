import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Package, Lightbulb, GraduationCap } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    title: "A Fractional Digital COO",
    description: "Strategic operational leadership without the full-time commitment",
  },
  {
    icon: Package,
    title: "A Product & Operations Partner",
    description: "Hands-on support for building and scaling digital products",
  },
  {
    icon: Lightbulb,
    title: "A Digital Transformation Advisor",
    description: "Guiding organizations through complex digital change",
  },
  {
    icon: GraduationCap,
    title: "A Leadership & Capability Builder",
    description: "Developing teams to drive sustainable innovation",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      delay: i * 0.12,
    },
  }),
};

export function StrategicRole() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Our Strategic Role
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your Digital Consulting & Transformation Partner
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We operate at the intersection of strategy, operations, product, and technology.
            Depending on your growth stage, we work with you as:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(201, 13, 13, 0.25)",
                transition: { duration: 0.3 } 
              }}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <role.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {role.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our focus is simple:{" "}
            <span className="text-foreground font-medium">
              help your business work better, scale faster, and compete confidently in a digital economy.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
