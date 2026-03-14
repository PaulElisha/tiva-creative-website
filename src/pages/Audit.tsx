import { Layout } from "@/components/layout/Layout";

const Audit = () => {
  return (
    <Layout>
      <section className="bg-background">
        <iframe
          src="https://digital-business-audit.vercel.app"
          title="Digital Business Readiness Audit"
          className="w-full border-0"
          style={{ minHeight: "calc(100vh - 73px)" }}
          allow="clipboard-write"
        />
      </section>
    </Layout>
  );
};

export default Audit;
