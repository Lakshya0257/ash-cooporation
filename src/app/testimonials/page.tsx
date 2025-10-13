import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}