import { getProjects } from "@/services/data";
import PortfolioContent from "./PortfolioContent";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
