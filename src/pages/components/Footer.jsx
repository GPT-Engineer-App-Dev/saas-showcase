import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 SaaS Company. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <Instagram size={20} />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground mr-4">
            Privacy Policy
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;