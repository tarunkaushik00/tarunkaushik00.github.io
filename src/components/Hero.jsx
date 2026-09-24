import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import tarunPhoto from "../assets/tarun.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Frontend / Web Developer
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Hi, I'm <span className="text-cyan-400">Tarun Kaushik</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            BCA graduate focused on creating responsive, modern and
            user-friendly web experiences using modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects
              <span>↗</span>
            </a>

            <a
              href="/public/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
              <FaArrowDown className="text-sm" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/tarunkaushik00"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-kaushik-4442a8310"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md justify-center lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Photo Frame */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-cyan-400/30 bg-white/5 shadow-[0_0_80px_rgba(34,211,238,0.15)] sm:h-80 sm:w-80">
              <img
                src={tarunPhoto}
                alt="Tarun Kaushik"
                className="relative h-64 w-64 overflow-hidden rounded-full border border-cyan-400/30 bg-white/5 shadow-[0_0_80px_rgba(34,211,238,0.15)] transition duration-500 hover:-translate-y-2 sm:h-80 sm:w-80"
              />
            </div>

            {/* Outer Ring */}
            <div className="pointer-events-none absolute -inset-3 rounded-full border border-cyan-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
