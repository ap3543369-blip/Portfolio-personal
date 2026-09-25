import Reveal from "./Reveal";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <Reveal className="section-heading text-center">
          <span className="section-subtitle">MY SKILLS</span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies, frameworks, databases and tools I use to build modern
            web applications.
          </p>
        </Reveal>

        <div className="row g-4 mt-4">
          {SKILLS.map((skill) => (
            <div className="col-lg-4 col-md-6" key={skill.name}>
              <Reveal className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>

                  <span className="level">{skill.level}</span>
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
