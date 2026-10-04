import { ArrowLeft, ArrowUpRight, House } from "lucide-react";
import { Link, useParams } from "react-router";
import ProjectArtwork from "../components/ProjectArtwork";
import ProjectDevNotes from "../components/ProjectDevNotes";
import projects from "../data/portfolio.json";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-detail-page project-not-found">
        <PageHeader />
        <div className="project-not-found__content">
          <p className="projects-kicker">Project not found</p>
          <h1>This page has moved on.</h1>
          <Link className="project-visit" to="/projects">Browse all projects <ArrowUpRight size={17} /></Link>
        </div>
      </main>
    );
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const externalUrl = project.projectUrl || project.externalUrl;
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const contactSubject = encodeURIComponent(`Let's discuss ${project.title}`);
  const contactBody = encodeURIComponent(`Hi Weston,\n\nI'd like to discuss a project like ${project.title}.`);

  return (
    <main className="project-detail-page">
      <PageHeader />
      <div className="project-detail-content">
        <p className="projects-kicker project-detail-kicker">
          {project.category === "tech" ? "Technology" : "Creative work"} <span>/</span> {project.tag}
        </p>

        <section className="project-hero">
          <ProjectArtwork className="project-hero__artwork" project={project} />
          <div className="project-hero__copy">
            <div className="project-hero__eyebrow">
              <p className="project-detail-number">PROJECT {String(project.id).padStart(2, "0")}</p>
              <ProjectDevNotes project={project} />
            </div>
            <h1>{project.title}<span>.</span></h1>
            <p className="project-hero__description">{project.description}</p>
            <div className="project-facts">
              <div>
                <span>Discipline</span>
                <strong>{project.tag}</strong>
              </div>
              {project.role ? (
                <div>
                  <span>Contribution</span>
                  <strong>{project.role}</strong>
                </div>
              ) : null}
            </div>
            {externalUrl ? (
              <a className="project-visit" href={externalUrl} target="_blank" rel="noreferrer">
                Visit project <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <span className="project-link-pending">Project link coming soon</span>
            )}
          </div>
        </section>

        <section className="project-story">
          <div>
            <p className="projects-kicker">01 / The why</p>
            <h2>Purpose</h2>
          </div>
          <div className="project-story__body">
            <p>{project.purpose || project.overview || project.description}</p>
          </div>
        </section>

        <section className="project-story project-capabilities">
          <div>
            <p className="projects-kicker">02 / What it does</p>
            <h2>Functionality</h2>
          </div>
          <div className="project-story__body">
            {project.features?.length ? (
              <ul className="project-feature-list">
                {project.features.map((feature, index) => (
                  <li key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{feature}</strong>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Project functionality details are being added.</p>
            )}
          </div>
        </section>

        <section className="project-story project-tooling">
          <div>
            <p className="projects-kicker">03 / The craft</p>
            <h2>Tools used</h2>
          </div>
          <div className="project-story__body">
            {project.tools?.length ? (
              <div className="project-tools">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            ) : (
              <p>Tool details are not listed for this project yet.</p>
            )}
          </div>
        </section>

        <section className="project-collaboration">
          <div>
            <p className="projects-kicker">Have something in mind?</p>
            <h2>Let’s make something<br />worth talking about.</h2>
          </div>
          {contactEmail ? (
            <a className="project-visit" href={`mailto:${contactEmail}?subject=${contactSubject}&body=${contactBody}`}>
              Discuss a project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <Link className="project-visit" to="/?contact=1">
              Discuss a project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          )}
        </section>

        <section className="explore-projects">
          <div className="explore-projects__heading">
            <div>
              <p className="projects-kicker">Keep exploring</p>
              <h2>Other projects</h2>
            </div>
            <Link to="/projects">All projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="explore-projects__grid">
            {otherProjects.map((item) => (
              <Link className="explore-card" to={`/projects/${item.slug}`} key={item.slug}>
                <ProjectArtwork project={item} />
                <span>{item.category === "tech" ? "Technology" : "Creative"}</span>
                <strong>{item.title}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function PageHeader() {
  return (
    <header className="projects-topbar">
      <Link className="projects-back" to="/projects">
        <ArrowLeft size={17} aria-hidden="true" />
        <span>All projects</span>
      </Link>
      <Link className="projects-home" to="/" aria-label="Home" title="Home">
        <House size={18} aria-hidden="true" />
      </Link>
    </header>
  );
}