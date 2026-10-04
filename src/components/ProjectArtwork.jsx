import {
  Clapperboard,
  Disc3,
  LineChart,
  Sparkles,
  Terminal,
} from "lucide-react";

const PLACEHOLDER_ICONS = {
  Clapperboard,
  Disc3,
  LineChart,
  Sparkles,
  Terminal,
};

export default function ProjectArtwork({ project, className = "", fit = "cover" }) {
  const PlaceholderIcon = PLACEHOLDER_ICONS[project.placeholderIcon];
  const imageFitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`project-artwork relative w-full overflow-hidden bg-[#e4e2dc] ${className}`} data-category={project.category}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className={`block h-full w-full transition-transform duration-400 ease-out object-cover`}
        />
      ) : (
        <div className="project-artwork__placeholder">
          {PlaceholderIcon ? <PlaceholderIcon aria-hidden="true" /> : null}
          <span>{project.title}</span>
        </div>
      )}
      
    </div>
  );
}