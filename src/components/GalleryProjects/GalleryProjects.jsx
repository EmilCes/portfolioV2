import './gallery-projects.css'

export default function GalleryProjects({ projects }) {
    return (
        <div className="gallery">
          <h2>Projects</h2>
          <hr />
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project">
                <img src={project.image} alt={project.title} />
                <p>{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

