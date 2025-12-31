import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Database, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Database,
    number: "01",
    title: "Digital Business Foundations",
    description: "We design and implement the digital infrastructure that supports growth, from online presence to internal systems, automation, and data.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Product, Operations & Scale",
    description: "We help you launch MVPs, optimise operations, and scale digital products and services using agile, user-centred, and outcome-driven approaches.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Transformation & Leadership",
    description: "We guide organisations through digital transformation, leadership alignment, change management, and innovation execution across teams and markets.",
  },
];

export function CorePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Our Core Pillars
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Three Pillars of Digital Excellence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-5xl font-bold text-accent/30 group-hover:text-primary/50 transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <div className="p-3 rounded-xl bg-primary group-hover:scale-110 group-hover:shadow-accent transition-all duration-300">
                    <pillar.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
