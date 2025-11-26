import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A weather application that fetches real-time weather data using APIs and displays forecasts with a clean, responsive interface.',
    technologies: ['React', 'API Integration', 'CSS'],
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A full-stack task management application with user authentication, allowing users to create, update, and organize their tasks.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
  },
  {
    id: 3,
    title: 'Algorithm Visualizer',
    description: 'An interactive tool that visualizes various sorting and pathfinding algorithms to help understand how they work.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS'],
  },
];

function Projects() {
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
