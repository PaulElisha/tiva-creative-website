import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Wrench, Scale, Award, Handshake, CheckCircle } from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Deep understanding of African business environments",
  },
  {
    icon: Wrench,
    title: "Practical, execution-focused frameworks",
  },
  {
    icon: Scale,
    title: "Strong balance of strategy and implementation",
  },
  {
    icon: Award,
    title: "Proven results across SMEs, founders, and institutions",
  },
  {
    icon: Handshake,
    title: "Ongoing partnership beyond project delivery",
  },
];

export function WhyTiva() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm font-semibold text-background/70 uppercase tracking-wider mb-4 block">
              Why Tiva Creative
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built for African Realities.{" "}
              <span className="text-background/80">Designed for Global Standards.</span>
            </h2>
            <p className="font-body text-lg opacity-80 leading-relaxed mb-8">
              What sets us apart is not just what we do, but how we do it. We build solutions that are realistic, scalable, and sustainable.
            </p>
          </motion.div>

          {/* Right Column - Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-background flex-shrink-0" />
                <p className="font-body text-base font-medium text-background">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
