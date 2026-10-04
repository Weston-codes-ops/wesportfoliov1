import { useState } from "react";
import { ArrowLeft, ArrowUpRight, House } from "lucide-react";
import { Link } from "react-router";
import ProjectArtwork from "../components/ProjectArtwork";
import projects from "../data/portfolio.json";

const FILTERS = [
  { label: "All work", value: "all" },
  { label: "Tech", value: "tech" },
  { label: "Creative", value: "creative" },
];

export default function Portfoliopage() {
  const [filter, setFilter] = useState("all");
  const visibleCategories = filter === "all" ? ["tech", "creative"] : [filter];

  return (
    <main className="projects-page">
      <header className="projects-topbar">
        <Link className="projects-back" to="/" aria-label="Back to home">
          <ArrowLeft size={17} aria-hidden="true" />
          <span>Back</span>
        </Link>
        <Link className="projects-home" to="/" aria-label="Home" title="Home">
          <House size={18} aria-hidden="true" />
        </Link>
      </header>

      <div className="projects-content">
        <section className="projects-intro">
          <p className="projects-kicker"><span /> Selected work · 2021—26</p>
          <h1>Projects, in two<br />different <em>languages.</em></h1>
          <div className="projects-intro__bottom">
            <p>A mix of useful systems and visual experiments, made with care.</p>
            <div className="projects-filters" role="group" aria-label="Filter projects">
              {FILTERS.map((item) => (
                <button
                  className={filter === item.value ? "is-active" : ""}
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  type="button"
                  aria-pressed={filter === item.value}
                >
                  {item.label}
                  <span>{item.value === "all" ? projects.length : projects.filter((project) => project.category === item.value).length}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {visibleCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          const isTech = category === "tech";
          return (
            <section className="project-category" key={category}>
              <div className="project-category__heading">
                <div>
                  <p className="projects-kicker">0{isTech ? 1 : 2} / {isTech ? "Build" : "Make"}</p>
                  <h2>{isTech ? "Technology" : "Creative"}</h2>
                </div>
                <p>{isTech ? "Products, systems & tools" : "Identity, image & art direction"}</p>
              </div>
              {categoryProjects.length ? (
                <div className="project-grid">
                  {categoryProjects.map((project) => (
                    <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
                      <ProjectArtwork project={project} />
                      <div className="project-card__meta">
                        <div>
                          <p>{project.tag}</p>
                          <h3>{project.title}</h3>
                        </div>
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </div>
                      <p className="project-card__description">{project.description}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="projects-empty">More work in this collection soon.</p>
              )}
            </section>
          );
        })}

        <footer className="projects-footer">
          <span>&copy; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}