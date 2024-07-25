import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              SaaS Company
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
            <Link to="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
            <Link to="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About Us</Link>
            <Link to="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;