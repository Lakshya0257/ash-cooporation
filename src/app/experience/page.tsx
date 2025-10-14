import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Experience />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
