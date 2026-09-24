import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug } from "../../../data/projectsData";

export const metadata = {
  title: "Hillora — Alpine Tourism & Mobility Platform Case Study | Yug Patel",
  description:
    "Explore Yug Patel's case study on Hillora: AI-powered mountain itinerary synthesis, elevation-calibrated transit, local economic retention modeling, and 4-tier RBAC for Himachal Pradesh."
};

export default function HilloraPage() {
  const project = getProjectBySlug("hillora");
  return <ProjectDetail project={project} />;
}
