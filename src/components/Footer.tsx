import { Heart, Shield, Users, Mail, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Hope Bridge</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A safe space for people with disabilities to share their stories, 
              connect with others, and access professional support.
            </p>
            <div className="flex items-center space-x-2 text-sm text-safe-blue">
              <Shield className="h-4 w-4" />
              <span>Safe • Inclusive • Supportive</span>
            </div>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Share Your Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Browse Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support Groups</a></li>
              
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Professional Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Find a Therapist</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare Professionals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Resources</a></li>
              
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Help</h3>
            <ul className="space-y-2 text-muted-foreground">
              
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@hopebridge.com</span>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Hope Bridge. Made with love for our community.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Shield className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;