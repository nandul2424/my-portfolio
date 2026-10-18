"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { techStackGroups } from "@/data";
import { cn } from "@/lib/utils";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "nandulhissella@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="relative z-10 mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
              {techStackGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#10132E]/90 p-4"
                >
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black-100/80 px-3 py-2 text-xs text-white-100"
                      >
                        {item.icon ? (
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-4 w-4 object-contain"
                          />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-purple" />
                        )}
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-purple/40 bg-black-100/70 p-4 xl:col-span-2">
                <p className="text-sm font-semibold text-white mb-2">
                  Additional tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flyway", "Arcjet", "Claude", "Cursor"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-[#10132E] px-3 py-2 text-xs text-white-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
              >
                <img src="/confetti.gif" alt="confetti" className="h-48 w-auto" />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
