import { getProjects } from "@/services/data";
import PortfolioContent from "./PortfolioContent";

export default async function PortfolioPage() {
  const cmsProjects = await getProjects();

  const projects = cmsProjects.map((project: any) => ({
    id: project.slug,
    title: project.name,
    description: project.excerpt,
    image: project.thumbnail?.url || "/api/placeholder/600/400",
    live: project.demoUrl,
    year: project.launchedAt ? new Date(project.launchedAt).getFullYear().toString() : "",
  }));

  return <PortfolioContent projects={projects} />;
}
