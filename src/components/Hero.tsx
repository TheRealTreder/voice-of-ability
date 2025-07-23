import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Heart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-gentle">
              <Shield className="h-6 w-6 text-safe-blue" />
              <span className="text-foreground font-medium">Safe • Supportive • Inclusive</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Story
            <span className="text-primary block">Matters</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A safe space for people with disabilities to share life stories, challenges, and achievements. 
            Connect with others who understand your journey and find support from healthcare professionals 
            who care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 shadow-warm">
              <MessageCircle className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Explore Community
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-gentle hover:shadow-warm transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Share & Express</h3>
              <p className="text-muted-foreground">
                Share your experiences through text, audio, or video in a judgment-free environment.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-gentle hover:shadow-warm transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-warm-orange/10 rounded-full mb-4 mx-auto">
                <Users className="h-6 w-6 text-warm-orange" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Find Community</h3>
              <p className="text-muted-foreground">
                Connect with others who share similar experiences and learn from their journeys.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-gentle hover:shadow-warm transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gentle-green/10 rounded-full mb-4 mx-auto">
                <Heart className="h-6 w-6 text-gentle-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Support</h3>
              <p className="text-muted-foreground">
                Access guidance from healthcare professionals and counselors when you need it most.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;