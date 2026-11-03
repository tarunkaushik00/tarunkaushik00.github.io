import restaurantImage from "../assets/Projects/restaurant.png";
import mistvaleImage from "../assets/Projects/mistvale.png";
import aarohiImage from "../assets/Projects/aarohi.png";
import netflixImage from "../assets/Projects/netflix.png";
import xCloneImage from "../assets/Projects/x-clone.png";
import todoImage from "../assets/Projects/todo.png";
import spotifyImage from "../assets/Projects/spotify.png";

const projects = [
  {
    title: "Restaurant Website",
    image: restaurantImage,
    description:
      "Responsive restaurant website converted from a Figma design, with an interactive food menu, validated booking and contact forms, mobile navigation, and customer reviews.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://tarunkaushik00.github.io/resturant-website/",
    github: "https://github.com/tarunkaushik00/resturant-website",
  },
  {
    title: "Mistvale Tea Co.",
    image: mistvaleImage,
    description:
      "Responsive tea e-commerce website with product search, category filters, sorting, product quick view, wishlist, and shopping cart. Includes coupon discounts, checkout, and pincode-based delivery checks.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Local Storage"],
    live: "https://tarunkaushik00.github.io/mistvale-tea-co/",
    github: "https://github.com/tarunkaushik00/mistvale-tea-co",
  },
  {
    title: "Aarohi Wears",
    image: aarohiImage,
    description:
      "Responsive ethnic-fashion catalog built with React, featuring data-driven product listings, dynamic product filtering, and collection browsing.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    live: "https://aarohiwears.netlify.app/",
    github: "https://github.com/tarunkaushik00/aarohi_wears",
  },
  {
    title: "Spotify Clone",
    image: spotifyImage,
    description:
      "Responsive music-player interface inspired by Spotify, with playlist management and audio playback using the JavaScript Audio API.",
    tech: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    live: "https://spotifyclonetk.netlify.app/",
    github: "https://github.com/tarunkaushik00/spotify-clone",
  },
  {
    title: "X UI Clone",
    image: xCloneImage,
    description:
      "Responsive X-inspired social media interface built with semantic HTML and Tailwind CSS.",
    tech: ["HTML5", "Tailwind CSS"],
    live: "https://tarunkaushik00.github.io/x-clone/",
    github: "https://github.com/tarunkaushik00/x-clone",
  },
  {
    title: "Todo List App",
    image: todoImage,
    description:
      "Responsive React task manager for creating, completing, and deleting everyday tasks.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    live: "https://tarunkaushik00.github.io/Todo-list-app/",
    github: "https://github.com/tarunkaushik00/Todo-list-app",
  },
  {
    title: "Netflix UI Clone",
    image: netflixImage,
    description:
      "Responsive Netflix-inspired streaming landing page with an interactive movie slider, feature sections, and an FAQ accordion.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://tarunkaushik00.github.io/streaming-ui-clone/",
    github: "https://github.com/tarunkaushik00/streaming-ui-clone",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Frontend Development Projects
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of responsive websites and interactive web applications
            built with React, JavaScript, HTML, CSS, and Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="relative h-48 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

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

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>
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