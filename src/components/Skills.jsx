const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "VS Code", "Netlify"],
  },
  {
    category: "Web Development",
    items: [
      "Responsive Design",
      "DOM Manipulation",
      "Browser Storage",
      "API Fundamentals",
    ],
  },
  {
    category: "Currently Learning",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use while building responsive
            interfaces and web applications.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-xl font-semibold">
                {skill.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;