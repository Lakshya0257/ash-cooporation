import Navigation from "@/components/Navigation";
import BehindTheScenes from "@/components/BehindTheScenes";
import Footer from "@/components/Footer";

export default function BehindTheScenesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <BehindTheScenes />
      </main>
      <Footer />
    </div>
  );
}