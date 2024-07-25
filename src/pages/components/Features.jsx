import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChart, Users } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring quick load times and responsive interactions."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful data analysis and visualization tools."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Collaboration",
    description: "Seamlessly work together with your team members in real-time, boosting productivity."
  }
];

const Features = () => {
  return (
    <section id="features" className="container py-20 md:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {feature.icon}
                <span>{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;