import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug } from "../../../data/projectsData";

export const metadata = {
  title: "PackSmart AI — Food Packaging & Barrier Physics Platform Case Study | Yug Patel",
  description:
    "Explore Yug Patel's case study on PackSmart AI: ASTM barrier permeation physics (D3985 / F1249), coupled Arrhenius degradation kinetics, multi-objective Pareto optimization, and enterprise RBAC SaaS."
};

export default function PackSmartPage() {
  const project = getProjectBySlug("packsmart-ai");
  return <ProjectDetail project={project} />;
}
