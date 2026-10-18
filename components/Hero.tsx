import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-16 z-10">
        <div className="w-full max-w-[89vw] lg:max-w-[80vw] flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="uppercase tracking-[0.35em] text-xs text-blue-100 max-w-96 mb-4">
              Software Engineer / DevOps / Infrastructure Engineer
            </p>
            <TextGenerateEffect
              words="Building reliable software, cloud workflows, and production-ready systems"
              className="text-[36px] md:text-5xl lg:text-6xl text-center lg:text-left"
            />
            <p className="mt-6 max-w-2xl text-center lg:text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white-200">
              Hi! I&apos;m Nandul Lokitha, a former Software Engineering Intern at
              Thomson Reuters from Sri Lanka
            </p>
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs md:text-sm text-white-200">
              {[
                "Sri Lanka",
                "Backend",
                "DevOps",
                "Cloud",
                "Testing",
                "Automation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.12] bg-black-200/60 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects">
                <MagicButton
                  title="View my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-black-100/70 p-3 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 blur-2xl" />
              <img
                src="Nandul_dp.jpg"
                alt="Nandul Lokitha profile photo"
                className="relative z-10 h-[420px] w-full rounded-2xl object-cover"
              />
              <div className="relative z-20 mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Nandul Lokitha
                  </h3>
                  <p className="text-sm text-white-200">
                    Software Engineer / DevOps / Infrastructure Engineer
                  </p>
                </div>
                <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple">
                  Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
