import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["1 User", "Basic Features", "1GB Storage", "Email Support"]
  },
  {
    name: "Pro",
    price: "$29.99",
    features: ["5 Users", "Advanced Features", "10GB Storage", "Priority Support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Users", "All Features", "Unlimited Storage", "24/7 Support"]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="container py-20 md:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;