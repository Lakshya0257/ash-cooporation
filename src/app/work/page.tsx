import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import ProjectProcess from "@/components/ProjectProcess";
import BehindTheScenes from "@/components/BehindTheScenes";
import SystemDesign from "@/components/SystemDesign";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Projects />
        <ProjectProcess />
        <BehindTheScenes />
        <SystemDesign />
      </main>
      <Footer />
    </div>
  );
}