import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug } from "../../../data/projectsData";

export const metadata = {
  title: "The BeingStrong Fitness — Case Study | Yug Patel",
  description:
    "Explore Yug Patel's frontend development case study on The BeingStrong Fitness: responsive Tailwind UI, Framer Motion choreographies, and Vercel edge deployment."
};

export default function BeingStrongPage() {
  const project = getProjectBySlug("beingstrong-fitness");
  return <ProjectDetail project={project} />;
}
