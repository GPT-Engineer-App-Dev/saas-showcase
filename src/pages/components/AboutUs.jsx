import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  { name: "John Doe", title: "CEO", image: "/placeholder.svg" },
  { name: "Jane Smith", title: "CTO", image: "/placeholder.svg" },
  { name: "Mike Johnson", title: "Lead Developer", image: "/placeholder.svg" }
];

const AboutUs = () => {
  return (
    <section id="about" className="container py-20 md:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-muted-foreground">
          We are a passionate team of innovators dedicated to revolutionizing the way businesses operate. 
          Our mission is to provide cutting-edge SaaS solutions that empower companies to reach their full potential.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;