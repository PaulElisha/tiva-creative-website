import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Target, Users, Building2, GraduationCap, Briefcase, BarChart3, Rocket, Settings, FileText, Calendar, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "foundations",
    title: "Digital Business Foundation & Growth Program",
    subtitle: "For ambitious SMEs ready to move from hustle-driven operations to structured, scalable digital businesses.",
    duration: "8–12 weeks",
    whoFor: [
      "Founder-led businesses overwhelmed by operations",
      "Brands that look \"busy\" but lack systems",
      "Businesses preparing for scale, funding, or expansion",
    ],
    whoNot: [
      "Micro businesses looking for cheap websites",
      "Founders unwilling to change how they operate",
      "One-off task buyers",
    ],
    outcomes: [
      "Clear digital & business priorities",
      "Structured internal workflows & tools",
      "A professional digital presence that supports sales",
      "Defined customer journey & lead flow",
      "Reduced founder dependency",
      "A 12-month digital growth roadmap",
    ],
    includes: [
      "Digital business audit & maturity assessment",
      "Operations & workflow redesign",
      "Digital presence as revenue infrastructure",
      "CRM, automation & collaboration tools setup",
      "Customer journey & growth funnel design",
      "Team enablement & SOPs",
      "Monthly performance dashboard",
      "Strategy-to-execution roadmap",
    ],
    entry: "Digital Business Audit & Strategy Sprint",
    icon: Settings,
  },
  {
    id: "scale",
    title: "Product, Operations & Scale Acceleration Program",
    subtitle: "For scaleups and growth-stage businesses launching, optimising, or scaling digital products and revenue systems.",
    duration: "90 Days (Extendable to 6–12 months)",
    whoFor: [
      "Businesses launching digital products or platforms",
      "Service businesses productising their offers",
      "Teams struggling with delivery, speed, or alignment",
    ],
    outcomes: [
      "A validated product or service offering",
      "Clear product roadmap & execution plan",
      "Optimised delivery & operations processes",
      "Faster time-to-market",
      "Stronger customer experience & retention",
      "Data-backed growth decisions",
    ],
    includes: [
      "Product strategy & validation",
      "MVP or product optimisation oversight",
      "Agile delivery & sprint management",
      "UX/CX alignment",
      "GTM & growth systems alignment",
      "Operations & performance optimisation",
      "Metrics, reporting & iteration planning",
    ],
    engagement: "Fixed 90-day consulting engagement with optional monthly retainer extension",
    icon: Rocket,
  },
  {
    id: "transformation",
    title: "Digital Transformation & Leadership Advisory Program",
    subtitle: "For institutions and organisations ready to lead digital transformation with clarity, capability, and confidence.",
    duration: "3–6 months (or ongoing advisory)",
    whoFor: [
      "Corporates",
      "Government agencies",
      "NGOs & development organisations",
      "Industry associations",
      "Universities & training institutions",
    ],
    outcomes: [
      "Clear digital transformation roadmap",
      "Leadership alignment & ownership",
      "Digitally fluent teams",
      "Pilot initiatives with measurable impact",
      "Improved efficiency, governance & innovation culture",
    ],
    includes: [
      "Digital maturity & readiness assessment",
      "Transformation strategy & roadmap",
      "Executive immersion & leadership workshops",
      "Innovation & pilot program design",
      "Change management & capability development",
      "Governance, risk & sustainability advisory",
      "Ongoing advisory & implementation oversight",
    ],
    entry: "Digital Transformation Audit + Executive Strategy Immersion",
    icon: Building2,
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 lg:py-32 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strategic Programs for{" "}
              <span className="text-accent">Every Growth Stage</span>
            </h1>
            <p className="font-body text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl">
              From building digital foundations to scaling products and leading enterprise transformation, our programs are designed to meet you where you are and take you where you need to go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, serviceIndex) => {
        const ServiceCard = () => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <section
              ref={ref}
              id={service.id}
              className={`py-24 lg:py-32 ${serviceIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="max-w-5xl mx-auto"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 rounded-2xl bg-primary/10 flex-shrink-0">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="font-body text-lg text-muted-foreground">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 mb-12 bg-accent/10 rounded-full px-4 py-2 w-fit">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="font-body text-sm font-semibold text-foreground">
                      Duration: {service.duration}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Who This Is For */}
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Who This Is For
                        </h3>
                        <ul className="space-y-3">
                          {service.whoFor.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-body text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Who It Is NOT For */}
                      {service.whoNot && (
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-destructive" />
                            Who It Is NOT For
                          </h3>
                          <ul className="space-y-3">
                            {service.whoNot.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                                <span className="font-body text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Core Outcomes */}
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-accent" />
                          Core Outcomes
                        </h3>
                        <ul className="space-y-3">
                          {service.outcomes.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="font-body text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* What's Included */}
                      <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          What's Included
                        </h3>
                        <ul className="space-y-4">
                          {service.includes.map((item, index) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <span className="font-display text-sm font-bold text-accent min-w-[24px]">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="font-body text-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Entry Requirement */}
                        {service.entry && (
                          <div className="mt-8 pt-6 border-t border-border">
                            <p className="font-body text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Entry Requirement:</span>{" "}
                              {service.entry}
                            </p>
                          </div>
                        )}

                        {/* Engagement Model */}
                        {service.engagement && (
                          <div className="mt-8 pt-6 border-t border-border">
                            <p className="font-body text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Engagement Model:</span>{" "}
                              {service.engagement}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        return <ServiceCard key={service.id} />;
      })}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-body text-lg opacity-80 mb-10 max-w-2xl mx-auto">
              Book a strategy session to discuss your specific needs and find the right program for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Strategy Session
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
