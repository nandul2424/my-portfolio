import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="w-full mt-12 max-w-6xl mx-auto grid grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="w-full border-neutral-200 dark:border-slate-800 text-black dark:text-white"
          >
            <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-8 items-start">
              <div className="w-full lg:w-[340px] shrink-0">
                <img
                  src={card.thumbnail}
                  alt={card.company}
                  className="w-full h-[260px] rounded-2xl object-cover border border-white/[0.08]"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-purple">
                      {card.period}
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2">
                      {card.title}
                    </h1>
                    <p className="text-white-200 font-medium mt-1">
                      {card.company}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-4 text-sm md:text-base text-white-100">
                  {card.desc.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-purple shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Experience;
