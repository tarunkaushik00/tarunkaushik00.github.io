import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center sm:px-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tarun Kaushik. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;