function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Building responsive, user-focused web experiences.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              I’m Tarun Kumar Kaushik, a BCA graduate (2025) and aspiring
              Frontend Developer from Bulandshahr, Uttar Pradesh. I build
              responsive, interactive websites using React.js, JavaScript,
              HTML5, CSS3, and Tailwind CSS.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              My projects include e-commerce experiences, a restaurant
              website, a music player, a task manager, and streaming and
              social media interfaces. I enjoy turning design ideas into
              polished web interfaces and deploying projects with GitHub
              Pages and Netlify. I’m currently learning Node.js, Express.js,
              and REST APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">8+</p>
              <p className="mt-2 text-sm text-gray-400">Frontend Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">2025</p>
              <p className="mt-2 text-sm text-gray-400">BCA Graduate</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">React</p>
              <p className="mt-2 text-sm text-gray-400">Frontend Development</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">GitHub Pages</p>
              <p className="mt-2 text-sm text-gray-400">Project Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;