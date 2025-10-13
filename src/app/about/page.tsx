import Navigation from "@/components/Navigation";
import About from "@/components/About";
import VideoBackground from "@/components/VideoBackground";
import MissionVision from "@/components/MissionVision";
import PersonalGallery from "@/components/PersonalGallery";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/ui/gradual-blur";


export default function AboutPage() {
  return (
   <>
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <About />
        <VideoBackground />
        <MissionVision />
        <PersonalGallery />
      </main>
      
      <Footer />
    </div>
    </>
  );
}