// TODO: add skills and maybe add icons for each one
const skills = [
  {title: 'React'}, 
  {title: 'React Native'},
  {title: 'JavaScript'},
  {title: 'C'},
  {title: 'C++'}
];

// TODO: complete function
function Skills() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
