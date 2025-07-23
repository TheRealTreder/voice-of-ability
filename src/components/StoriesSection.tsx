import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Clock } from "lucide-react";
const stories = [{
  id: 1,
  author: "Sarah M.",
  title: "Finding Independence After My Accident",
  excerpt: "Three years ago, my world changed completely. But today, I want to share how I discovered strength I never knew I had and the amazing community that helped me rebuild...",
  category: "Inspiration",
  readTime: "5 min read",
  likes: 124,
  comments: 18,
  avatar: "SM"
}, {
  id: 2,
  author: "Marcus L.",
  title: "Navigating College with Visual Impairment",
  excerpt: "Starting university was scary enough, but doing it with a visual impairment brought unique challenges. Here's what I learned about advocacy, technology, and finding your voice...",
  category: "Education",
  readTime: "7 min read",
  likes: 89,
  comments: 12,
  avatar: "ML"
}, {
  id: 3,
  author: "Dr. Jennifer K.",
  title: "Supporting Mental Health in Disability Communities",
  excerpt: "As both a therapist and someone with a disability, I've seen how crucial mental health support is. Let me share some strategies that have helped my patients and myself...",
  category: "Professional Insight",
  readTime: "4 min read",
  likes: 156,
  comments: 23,
  avatar: "JK"
}];
const StoriesSection = () => {
  return <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your experiences matter. Connect with others who understand your challenges, celebrate your victories, and find strength in shared stories.

        </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map(story => <Card key={story.id} className="h-full hover:shadow-warm transition-all duration-300 bg-card border-border group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {story.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{story.author}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {story.readTime}
                    </div>
                  </div>
                </div>
                
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                  {story.category}
                </span>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{story.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{story.comments}</span>
                    </button>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Stories
          </Button>
        </div>
      </div>
    </section>;
};
export default StoriesSection;