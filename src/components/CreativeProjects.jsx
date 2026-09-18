import {
  Layers,
  Sparkles,
  Lightbulb,
  Clapperboard,
  Disc3,
} from "lucide-react";
import projects from "../data/portfolio.json";

const CREATIVE_PLACEHOLDER_ICONS = {
  Clapperboard,
  Disc3,
  Sparkles,
};

export default function CreativeProjects() {
  const creativeProjects = projects.filter((p) => p.category === "creative");

  return (
    <div className="bg-white px-8 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-4">
        <div className="lg:w-1/3 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-none ml-10 mt-7">
            Creative
            <br />
            projects
          </h2>
          <div className="flex flex-row gap-4 text-5xl ml-10">
            <Layers size={48} className="text-gray-800" />
            <Sparkles size={48} className="text-gray-800" />
            <Lightbulb size={48} className="text-gray-800" />
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-6 justify-center w-full">
          {creativeProjects.map((project, index) => {
            const PlaceholderIcon = project.placeholderIcon
              ? CREATIVE_PLACEHOLDER_ICONS[project.placeholderIcon]
              : null;
            return (
              <div
                key={project.id}
                className="w-64 h-80 bg-gray-300 shadow-lg flex-shrink-0 relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:scale-[1.02] hover:brightness-105"
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
      </div>
    </div>
  );
}
