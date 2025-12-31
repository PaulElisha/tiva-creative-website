import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
