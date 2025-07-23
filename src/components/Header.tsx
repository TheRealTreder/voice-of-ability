import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Hope Bridge</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#share" className="text-foreground hover:text-primary transition-colors">
              Share
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;