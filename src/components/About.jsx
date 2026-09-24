function About() {
  return (
    <section
      id="about"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Turning ideas into web experiences.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              I'm Tarun Kumar Kaushik, a BCA graduate and aspiring
              Frontend/Web Developer from Uttar Pradesh. I enjoy creating
              responsive, interactive and user-friendly websites using
              modern web technologies.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              I have built several frontend projects including streaming,
              social-media, productivity and music-platform interfaces.
              These projects have helped me strengthen my understanding of
              responsive design, JavaScript, React and modern frontend
              development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">4+</p>
              <p className="mt-2 text-sm text-gray-400">
                Projects Built
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">2025</p>
              <p className="mt-2 text-sm text-gray-400">
                BCA Graduate
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">8+</p>
              <p className="mt-2 text-sm text-gray-400">
                Web Technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-bold text-cyan-400">100%</p>
              <p className="mt-2 text-sm text-gray-400">
                Learning Mindset
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;