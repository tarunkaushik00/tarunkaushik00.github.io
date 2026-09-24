const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "IP College Campus 2, Bulandshahr",
    year: "2022 – 2025",
    score: "70%",
  },
  {
    degree: "Intermediate — CBSE",
    institute: "Dewan Public School",
    year: "2022",
    score: "70%",
  },
  {
    degree: "High School — CBSE",
    institute: "Saraswati Bal Mandir Sr. Sec. School",
    year: "2020",
    score: "60%",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My academic journey.
          </h2>
        </div>

        <div className="relative ml-3 border-l border-white/10 pl-8">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-[#050505] bg-cyan-400" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {item.institute}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/10 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300">
                    {item.year}
                  </span>
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  Percentage:{" "}
                  <span className="font-medium text-gray-300">
                    {item.score}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;