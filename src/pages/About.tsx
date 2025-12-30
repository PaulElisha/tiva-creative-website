import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Lightbulb, HeartHandshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const approach = [
  {
    icon: Users,
    title: "Client-Centric Partnership",
    description: "We embed ourselves in your context",
  },
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description: "Strategy backed by insights, not assumptions",
  },
  {
    icon: Lightbulb,
    title: "Strategic Implementation",
    description: "We don't stop at recommendations",
  },
  {
    icon: HeartHandshake,
    title: "Sustainable Innovation",
    description: "Solutions built to evolve with your business",
  },
];

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const approachRef = useRef(null);
  const leadershipRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isApproachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const isLeadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });

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
              About Tiva Creative
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Partner with Businesses to Build the Future of{" "}
              <span className="text-accent">Work, Commerce, and Growth</span> in Africa.
            </h1>
            <p className="font-body text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl">
              Tiva Creative is a digital consulting and business transformation company helping African businesses move from ideas and ambition to structured execution and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {["Growth-focused SMEs", "Founder-led brands", "Product teams", "Institutions navigating digital change"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="font-body text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Our role is to help you think clearly, operate efficiently, and scale confidently using technology, systems, and people.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section ref={missionRef} className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
                Why We Exist
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Closing the Gap Between Potential and Performance
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Across Nigeria and Africa, many businesses are full of potential but limited by:
                </p>
                <ul className="space-y-3">
                  {["Manual processes", "Fragmented systems", "Poor execution frameworks", "Limited digital leadership capacity"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground font-medium pt-4">
                  We exist to close that gap.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 lg:p-12 rounded-3xl bg-primary text-primary-foreground"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-accent">Our Mission</h3>
                  <p className="font-body opacity-90 leading-relaxed">
                    To design and deliver digital strategies, systems, and solutions that optimise operations, empower teams, and drive sustainable business growth.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-accent">Our Vision</h3>
                  <p className="font-body opacity-90 leading-relaxed">
                    To become a trusted digital consulting partner shaping how African businesses build, scale, and compete globally.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-accent">Our Belief</h3>
                  <p className="font-body opacity-90 leading-relaxed">
                    We believe every business - regardless of size - deserves access to smart, practical, and reliable digital solutions that enable growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Our Approach
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4">
              Our work is guided by four principles:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            We stay engaged beyond delivery to ensure long-term impact.
          </motion.p>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadershipRef} className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Led by Strategy, Built for Execution
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Tiva Creative is led by a team of strategists, product thinkers, and operators with hands-on experience building and scaling digital solutions across industries.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {["Business strategy", "Product & operations expertise", "Change & transformation management", "Training & capability development"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border shadow-soft"
                >
                  <p className="font-body text-sm font-medium text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-muted-foreground">
              This blend allows us to advise at executive level while still delivering on the ground.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              At Tiva Creative, we don't just help businesses "go digital."
              <br />
              <span className="text-primary">
                We help them work smarter, grow stronger, and lead confidently in a digital economy.
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="teal" size="xl" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
