import Reveal from "./Reveal";

export default function ProjectCard({ project, small = false }) {
  const content = (
    <>
      <div className="project-icon">
        <i className={project.icon}></i>
      </div>

      <h4>{project.name}</h4>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </>
  );

  const links = (
    <div className="project-links">
      <a
        href={project.github}
        className="project-btn"
        {...(project.github !== "#" && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}>
        <i className="fab fa-github"></i>
        GitHub
      </a>
    </div>
  );

  // "Other Projects" wale cards me content aur links alag wrapper me the (original structure)
  if (small) {
    return (
      <Reveal className="project-card small-project">
        <div>{content}</div>
        {links}
      </Reveal>
    );
  }

  return (
    <Reveal className="project-card">
      {content}
      {links}
    </Reveal>
  );
}
