import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Heart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
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
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Hope Bridge is designed for individuals who face challenges with hearing, vision, speech, or mental health. We believe everyone deserves to be heard and supported.

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
          
        </div>
      </div>
    </section>;
};
export default Hero;