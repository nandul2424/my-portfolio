import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build <span className="text-purple">reliable</span> software
          together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m open to backend engineering, DevOps, cloud infrastructure,
          and production-ready software opportunities.
        </p>
        <a href="mailto:nandulhissella@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Nandul Lokitha
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer px-4 py-2 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition-colors"
            >
              {info.name === "GitHub" ? (
                <FaGithub className="text-lg" />
              ) : (
                <FaLinkedin className="text-lg" />
              )}
              <span className="text-sm">{info.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
