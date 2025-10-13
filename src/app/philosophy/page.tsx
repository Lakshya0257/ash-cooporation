import Navigation from "@/components/Navigation";
import VideoBackground from "@/components/VideoBackground";
import Footer from "@/components/Footer";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <VideoBackground />
      </main>
      <Footer />
    </div>
  );
}