import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProjectDetail projectId={params.id} />
      </main>
      <Footer />
    </div>
  );
}