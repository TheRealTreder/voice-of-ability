import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoriesSection from "@/components/StoriesSection";
import ShareStorySection from "@/components/ShareStorySection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StoriesSection />
      <ShareStorySection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
