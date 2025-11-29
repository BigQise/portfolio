import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'GopherFit',
    description: 'A fitness app that includes workout, macro and calorie tracking as well as a social media page for UMN students to share fitness related content with eachother',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Go', 'MySQL'],
    link: "https://github.com/umn-adc/gopher-fit-front",
  },
  {
    id: 2,
    title: 'GopherTunnels',
    description: 'A mobile navigation app based off MapBox, made to help University of Minnesota students naviagate the campus\'s confusing skyway and tunnel system',
    technologies: ['React Native', 'Expo', 'Express', 'Neo4j', 'TypeScript'],
    link: 'https://github.com/gopher-tunnels',
  },
  {
    id: 3,
    title: 'Video Editor',
    description: 'An interactive video editor that allows for multiple video, image and audio tracks with features such as image-processing filters and drawing',
    technologies: ['C++', 'OpenGL'],
    link: "", // cant link, behind university firewall
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This is the website. It features stuff about me and was built so I can show off more projects that I am currently working on to show my constant learning and also to have fun with React. Much more renovations will come to this site',
    technologies: ['JavaScript', 'React', 'CSS'],
    link: "https://github.com/BigQise/portfolio", // add link when deployed
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <a href={project.link}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
