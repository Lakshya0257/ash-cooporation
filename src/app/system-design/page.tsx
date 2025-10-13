import Navigation from "@/components/Navigation";
import SystemDesign from "@/components/SystemDesign";
import Footer from "@/components/Footer";

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <SystemDesign />
      </main>
      <Footer />
    </div>
  );
}