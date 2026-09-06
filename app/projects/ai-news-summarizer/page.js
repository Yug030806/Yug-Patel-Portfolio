import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug } from "../../../data/projectsData";

export const metadata = {
  title: "AI News Summarizer — Research & Case Study | Yug Patel",
  description:
    "Explore Yug Patel's role as Researcher & Speaker for AI News Summarizer: NLP preprocessing, TF-IDF salience scoring, spaCy NER, and sentiment classification."
};

export default function AINewsSummarizerPage() {
  const project = getProjectBySlug("ai-news-summarizer");
  return <ProjectDetail project={project} />;
}
