import { certifications, coreSkills, education } from "@/data";
const Clients = () => {
  return (
    <section id="credentials" className="py-20">
      <h1 className="heading">
        Credentials & <span className="text-purple">foundations</span>
      </h1>
      <p className="mt-4 text-center text-white-200 max-w-3xl mx-auto">
        Certifications, engineering principles, and academic background that
        support how I build software and delivery pipelines.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/[0.08] bg-black-100/60 p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl border border-white/[0.08] bg-[#10132E] p-4"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-purple">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-white-200">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/[0.08] bg-black-100/60 p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white">Core skills</h2>
          <div className="mt-6 space-y-4">
            {coreSkills.map((skill) => (
              <div
                key={skill.id}
                className="rounded-2xl border border-white/[0.08] bg-[#10132E] p-4"
              >
                <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                <p className="mt-2 text-sm text-white-200">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-white/[0.08] bg-black-100/60 p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.08] bg-[#10132E] p-5"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-purple">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white-200">{item.institution}</p>
                </div>
                <span className="mt-2 inline-flex w-fit rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs text-purple md:mt-0">
                  {item.meta}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white-200">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Clients;
