import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Cog, Rocket, Users } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Design clear digital and business strategies",
  },
  {
    icon: Cog,
    title: "Build systems that improve efficiency and customer experience",
  },
  {
    icon: Rocket,
    title: "Launch and scale products faster with less waste",
  },
  {
    icon: Users,
    title: "Equip leaders and teams to drive sustainable digital growth",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              What We Actually Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              More Than Digital Services.{" "}
              <span className="text-primary">We Build Digital Businesses.</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Most African businesses don't fail because they lack ideas. They struggle because their operations, systems, and teams are not designed for scale.
              </p>
              <p>At Tiva Creative, we help you:</p>
            </div>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 12, scale: 1.02, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-accent hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-body text-foreground font-medium leading-relaxed">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="font-display text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
            We don't just advise.{" "}
            <span className="text-primary font-semibold">
              We design, implement, and stay with you through execution.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
