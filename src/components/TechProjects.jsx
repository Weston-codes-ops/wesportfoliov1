import { Code2, Shield, LineChart, Terminal } from "lucide-react";
import projects from "../data/portfolio.json";

const TECH_PLACEHOLDER_ICONS = {
  LineChart,
  Terminal,
};

export default function TechProjects() {
  const techProjects = projects.filter((p) => p.category === "tech");

  return (
    <div className="bg-white px-8 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="flex-1 flex flex-col md:flex-row gap-6 justify-center w-full">
          {techProjects.map((project, index) => {
            const PlaceholderIcon = project.placeholderIcon
              ? TECH_PLACEHOLDER_ICONS[project.placeholderIcon]
              : null;
            return (
              <div
                key={project.id}
                className="w-64 h-80 bg-gray-200 shadow-lg flex-shrink-0 relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:scale-[1.02] hover:brightness-105"
                style={{
                  transform: `rotate(${(index - 1) * 2}deg)`,
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : PlaceholderIcon ? (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      project.placeholderGradient ||
                      "from-slate-800 to-slate-950"
                    } flex items-center justify-center`}
                  >
                    <PlaceholderIcon
                      size={110}
                      strokeWidth={1.25}
                      className={`${
                        project.placeholderAccent || "text-white/80"
                      } drop-shadow-lg`}
                    />
                  </div>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-gray-300 mb-1">
                    {project.tag}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:w-1/3 flex flex-col items-start lg:items-center justify-center space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <Code2 size={32} />
            <span className="font-medium text-gray-700">Software</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold">Tech</h2>
          <div className="flex items-center gap-4">
            <Shield size={32} />
            <span className="text-lg font-medium text-gray-700">
              Cybersecurity
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-gray-500">
          More of my technical work here{" "}
          <span className="underline font-medium text-gray-800">Projects</span>
        </p>
      </div>
    </div>
  );
}
