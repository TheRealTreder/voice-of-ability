import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Brain, Heart, MessageCircle, Calendar, Star } from "lucide-react";
const professionals = [{
  id: 1,
  name: "Dr. Sarah Chen",
  title: "Licensed Clinical Psychologist",
  specialties: ["Trauma Recovery", "Disability Psychology", "Cognitive Behavioral Therapy"],
  rating: 4.9,
  reviews: 127,
  availability: "Available this week",
  avatar: "SC"
}, {
  id: 2,
  name: "Michael Rodriguez",
  title: "Licensed Professional Counselor",
  specialties: ["Peer Support", "Life Transitions", "Anxiety & Depression"],
  rating: 4.8,
  reviews: 89,
  availability: "Next appointment: Tomorrow",
  avatar: "MR"
}, {
  id: 3,
  name: "Dr. Amanda Williams",
  title: "Rehabilitation Counselor",
  specialties: ["Vocational Rehabilitation", "Independent Living", "Assistive Technology"],
  rating: 4.9,
  reviews: 156,
  availability: "Available for consultation",
  avatar: "AW"
}];
const SupportSection = () => {
  return <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We offer many services to be able to provide our clients with the best care and support.</p>
        </div>
        
        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <Card className="text-center p-6 bg-card border-border shadow-gentle hover:shadow-warm transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Peer Support</h3>
            <p className="text-muted-foreground mb-4">Connect with others who share similar experiences to understand eachother.</p>
            <Button variant="outline" size="sm">
              Join Support Groups
            </Button>
          </Card>
          
          <Card className="text-center p-6 bg-card border-border shadow-gentle hover:shadow-warm transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-warm-orange/10 rounded-full mb-4 mx-auto">
              <Brain className="h-8 w-8 text-warm-orange" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Sign Language</h3>
            <p className="text-muted-foreground mb-4">Learn sign language to be able to contact more people with it.</p>
            <Button variant="outline" size="sm">Learn Sign Language</Button>
          </Card>
          
          <Card className="text-center p-6 bg-card border-border shadow-gentle hover:shadow-warm transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gentle-green/10 rounded-full mb-4 mx-auto">
              <Stethoscope className="h-8 w-8 text-gentle-green" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Medical Guidance</h3>
            <p className="text-muted-foreground mb-4">Get advice from an experienced doctor to help you through hard times.</p>
            <Button variant="outline" size="sm">Consult Doctors</Button>
          </Card>
        </div>
        
        {/* Featured Professionals */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Available Doctors</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map(professional => <Card key={professional.id} className="bg-card border-border shadow-gentle hover:shadow-warm transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {professional.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{professional.name}</h4>
                      <p className="text-sm text-muted-foreground">{professional.title}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-foreground">{professional.rating}</span>
                        <span className="text-sm text-muted-foreground">({professional.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {professional.specialties.map((specialty, index) => <Badge key={index} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {specialty}
                        </Badge>)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4 text-sm">
                    <Calendar className="h-4 w-4 text-gentle-green" />
                    <span className="text-gentle-green font-medium">{professional.availability}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View All Professionals
            </Button>
          </div>
        </div>
        
        {/* Emergency Support */}
        
      </div>
    </section>;
};
export default SupportSection;