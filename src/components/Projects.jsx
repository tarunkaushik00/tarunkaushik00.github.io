import netflixImage from "../assets/Projects/netflix.png";
import xCloneImage from "../assets/Projects/spotify.png";
import todoImage from "../assets/Projects/todo.png";
import spotifyImage from "../assets/Projects/spotify.png";

const projects = [
  {
    title: "Netflix UI Clone",
    image: netflixImage,
    description:
      "A responsive Netflix-inspired streaming interface built with a focus on modern layouts, interactive UI elements and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tarunkaushik00.github.io/streaming-ui-clone/",
    github: "https://github.com/tarunkaushik00/streaming-ui-clone",
  },
  {
    title: "X UI Clone",
    image: xCloneImage,
    description:
      "A responsive X-inspired social media interface featuring navigation, feed, trending sections and mobile-friendly layouts.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://tarunkaushik00.github.io/x-clone/",
    github: "https://github.com/tarunkaushik00/x-clone",
  },
  {
    title: "Todo List App",
    image: todoImage,
    description:
      "A task management application built with React, allowing users to create, complete and delete tasks through a responsive interface.",
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://tarunkaushik00.github.io/Todo-list-app/",
    github: "https://github.com/tarunkaushik00/Todo-list-app",
  },
  {
    title: "Spotify Clone",
    image: spotifyImage,
    description:
      "A responsive music streaming interface inspired by Spotify with navigation, playlists, library and music-player oriented UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://spotifyclonetk.netlify.app/",
    github: "https://github.com/tarunkaushik00/spotify-clone",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">Things I've built.</h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of my frontend projects and web development work.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* Project Preview */}
              <div className="relative h-48 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    Live Demo ↗
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
