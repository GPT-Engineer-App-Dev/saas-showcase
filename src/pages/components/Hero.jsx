import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Revolutionize Your Workflow
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Our SaaS solution streamlines your business processes, boosts productivity, and drives growth.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="w-full max-w-md">
        <img
          src="/placeholder.svg"
          alt="SaaS Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;