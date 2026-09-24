function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-6 sm:p-10 lg:p-14">
          
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's build something together.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I'm currently open to opportunities where I can use my frontend
            and web development skills while continuing to learn and grow.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <a
              href="mailto:kumartarunkaushik4628@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/tarunkaushik00"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-kaushik-4442a8310"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="break-all text-sm text-gray-500">
              📧 kumartarunkaushik4628@gmail.com
            </p>

            <p className="mt-3 text-sm text-gray-500">
              📍 Bulandshahr, Uttar Pradesh, India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;