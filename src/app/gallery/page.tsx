import Navigation from "@/components/Navigation";
import PersonalGallery from "@/components/PersonalGallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PersonalGallery />
      </main>
      <Footer />
    </div>
  );
}