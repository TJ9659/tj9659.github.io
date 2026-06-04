import GeneralLayout from "../components/ui/GeneralLayout";
import projectData from "../data/projects.json";

export default function Projects() {
  return (
    <GeneralLayout
      header="Projects"
      secondHeader="Check out some of my recent projects!"
    >
      <div className="space-y-16 md:space-y-24">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-8 md:gap-20"
          >
            <div className="w-full md:w-1/2">
              <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-xs">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  loading="lazy"
                  className="w-full aspect-video rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#f0e5ce] rounded-full py-2.5 px-5 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-[#f2eada]"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GeneralLayout>
  );
}
