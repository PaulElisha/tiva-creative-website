import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { StrategicRole } from "@/components/sections/StrategicRole";
import { CorePillars } from "@/components/sections/CorePillars";
import { WhyTiva } from "@/components/sections/WhyTiva";
import { SocialProof } from "@/components/sections/SocialProof";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <StrategicRole />
      <CorePillars />
      <WhyTiva />
      <SocialProof />
      <ClosingCTA />
    </Layout>
  );
};

export default Index;
