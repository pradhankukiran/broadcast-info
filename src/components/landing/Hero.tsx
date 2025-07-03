import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[length:200%_200%] bg-belgium-gradient-full animate-background-pan" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="z-10">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Broadcast Info
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mt-6">
          A simple app to check your radio broadcast information.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/dashboard">
            <Button>View Dashboard</Button>
          </Link>
          <Link to="/settings">
            <Button variant="secondary">Settings</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
