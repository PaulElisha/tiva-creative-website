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

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
