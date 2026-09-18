import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import TechProjects from "../components/TechProjects";
import CreativeProjects from "../components/CreativeProjects";

export default function Portfoliopage() {
  return (
    <section className="min-h-screen">
      <div className="bg-black text-white">
        <div className="px-8 pt-6">
          <Link to="/">
            <button className="bg-white text-black px-5 py-2.5 flex items-center gap-2 font-semibold hover:bg-gray-100 transition-colors">
              <ArrowLeft size={20} />
              Back
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Explore my Repoitoire
          </h1>
          <p className="text-gray-400 underline underline-offset-4 text-lg">
            A combination of tech and creative projects
          </p>
        </div>
      </div>

      <TechProjects />

      <div className="px-8 py-12 bg-white">
        <p className="text-center text-xl font-semibold mb-16">
          I enjoy making products, as well making sure to secure them
        </p>
        <div className="border-t border-gray-200 max-w-6xl mx-auto" />
      </div>

      <CreativeProjects />
    </section>
  );
}
