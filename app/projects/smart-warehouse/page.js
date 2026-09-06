import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug } from "../../../data/projectsData";

export const metadata = {
  title: "Smart Warehouse Automation System — Case Study | Yug Patel",
  description:
    "Explore Yug Patel's case study on the Smart Warehouse Automation System: multi-floor A* pathfinding, elevator interchange routing, AMR cart simulation, and Supabase telemetry."
};

export default function SmartWarehousePage() {
  const project = getProjectBySlug("smart-warehouse");
  return <ProjectDetail project={project} />;
}
