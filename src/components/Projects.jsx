import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { PROJECT_CATEGORIES } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <Reveal className="section-heading text-center">
          <span className="section-subtitle">MY PROJECTS</span>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A collection of projects demonstrating my frontend, backend and
            full-stack development skills.
          </p>
        </Reveal>

        {PROJECT_CATEGORIES.map((category) => (
          <div className="project-category" key={category.title}>
            <h3 className="project-level">{category.title}</h3>

            <div className="row g-4">
              {category.projects.map((project) => (
                <div
                  className={category.layout === "half" ? "col-lg-6" : "col-lg-4 col-md-6"}
                  key={project.name}>
                  <ProjectCard project={project} small={category.small} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
