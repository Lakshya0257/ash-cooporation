import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProjectDetail projectId={id} />
      </main>
      <Footer />
    </div>
  );
}