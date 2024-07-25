import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="container py-20 md:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Your message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;