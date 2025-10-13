import Navigation from "@/components/Navigation";
import ProjectProcess from "@/components/ProjectProcess";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProjectProcess />
      </main>
      <Footer />
    </div>
  );
}