import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "20X",
    label: "Revenue growth for founder-led businesses",
  },
  {
    icon: Users,
    value: "40+",
    label: "Qualified monthly leads through digital systems",
  },
  {
    icon: Clock,
    value: "Days → Hours",
    label: "Reduced operational delays",
  },
  {
    icon: Award,
    value: "100%",
    label: "Leaders trained to drive digital innovation",
  },
];

const testimonials = [
  {
    quote: "Tiva Creative transformed our operations from chaos to clarity. Their practical approach and deep understanding of our business made all the difference.",
    author: "Adebayo O.",
    role: "CEO, Tech Startup",
  },
  {
    quote: "Working with Tiva Creative felt like having an extension of our team. They don't just advise—they roll up their sleeves and get things done.",
    author: "Chioma A.",
    role: "Founder, E-commerce Brand",
  },
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Social Proof
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Trusted by Growing Brands and Forward-Thinking Leaders
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-accent hover:border-primary/30 transition-all duration-300"
            >
              <motion.div 
                className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <metric.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="font-display text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <p className="font-body text-sm text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft hover:shadow-accent hover:border-primary/30 transition-all duration-300"
            >
              <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
