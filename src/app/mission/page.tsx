import Navigation from "@/components/Navigation";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}