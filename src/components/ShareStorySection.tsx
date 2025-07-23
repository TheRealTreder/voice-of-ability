import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PenTool, Mic, Video, Shield, Heart } from "lucide-react";

const ShareStorySection = () => {
  return (
    <section id="share" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Share Your Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your experiences matter. Share them in the way that feels most comfortable for you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sharing Options */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Choose Your Format
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 border-primary/20 hover:bg-primary/5"
                  >
                    <PenTool className="h-5 w-5 mr-3 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Write Your Story</div>
                      <div className="text-sm text-muted-foreground">Share through text</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 border-warm-orange/20 hover:bg-warm-orange/5"
                    disabled
                  >
                    <Mic className="h-5 w-5 mr-3 text-warm-orange" />
                    <div className="text-left">
                      <div className="font-medium">Record Audio</div>
                      <div className="text-sm text-muted-foreground">Coming soon</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 border-gentle-green/20 hover:bg-gentle-green/5"
                    disabled
                  >
                    <Video className="h-5 w-5 mr-3 text-gentle-green" />
                    <div className="text-left">
                      <div className="font-medium">Video Story</div>
                      <div className="text-sm text-muted-foreground">Coming soon</div>
                    </div>
                  </Button>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-safe-blue" />
                      <span>Your privacy is protected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Story Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Tell Your Story
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Share as much or as little as you're comfortable with. Every story helps someone.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="story-title" className="text-foreground font-medium">
                      Story Title
                    </Label>
                    <Input 
                      id="story-title"
                      placeholder="Give your story a title that feels right to you"
                      className="mt-1 border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="story-category" className="text-foreground font-medium">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-border">
                        <SelectValue placeholder="Choose a category (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inspiration">Inspiration</SelectItem>
                        <SelectItem value="challenges">Overcoming Challenges</SelectItem>
                        <SelectItem value="achievements">Achievements</SelectItem>
                        <SelectItem value="daily-life">Daily Life</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="workplace">Workplace</SelectItem>
                        <SelectItem value="relationships">Relationships</SelectItem>
                        <SelectItem value="healthcare">Healthcare Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="story-content" className="text-foreground font-medium">
                      Your Story
                    </Label>
                    <Textarea 
                      id="story-content"
                      placeholder="Share your experience, thoughts, challenges, or achievements. Write as much as feels comfortable."
                      className="mt-1 min-h-[200px] border-border focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Anonymous</Badge>
                    <Badge variant="secondary" className="bg-safe-blue/10 text-safe-blue">Safe Space</Badge>
                    <Badge variant="secondary" className="bg-gentle-green/10 text-gentle-green">Supportive Community</Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Share with Community
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save as Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareStorySection;