import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isBananaUp, setIsBananaUp] = useState(true);

  const flip = () => {
    setIsBananaUp(!isBananaUp);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-8 mx-auto">
        <div className="transform translate-y-12">
          {/* header */}
          <div className="flex items-center justify-center w-full max-w-4xl mx-auto mb-8 animate-fade-in-down">
            <hr className="w-1/3 m-8" />
            <h1 className="text-lg font-extrabold text-black uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-8xl black-outline">
              About
            </h1>
            <hr className="w-1/3 m-8" />
          </div>
          {/* card */}
          <div className="p-8 mx-auto border-2 bg-primary max-w-7xl rounded-xl">
            <div className="flex flex-wrap ">
              {/* row-1 */}
              <div className="w-full pl-3 mb-6 sm:pr-10 md:w-2/3 md:mb-0">
                <h3 className="my-4 sm:text-xl md:text-4xl font-outline black-outline">
                  Profile
                </h3>
                <hr />
                <br />
                <div className="text-sm tracking-wider text-white 2xl:text-lg">
                  <p className="text-lg tracking-widest 2xl:text-xl">
                    <strong>Maker. &nbsp; Tinkerer. &nbsp; Creative.</strong>
                  </p>
                  <br />
                  <p>
                    Originally from the good ol&apos; <strong>Midwest</strong>,
                    now hailing from the great <strong>PNW</strong>. First
                    generation college-grad humanities major <em>turned</em>{" "}
                    math teacher, <em>turned </em>
                    backpacking nomad, <em>turned </em> field service
                    technician, <em>turned </em>
                    <strong>self-taught developer </strong> with a coding
                    bootcamp and <strong>professional web-dev experience</strong> now under
                    his belt.
                  </p>
                  <br />
                  <p>Has a knack for quickly picking up new skills and adapting to
                  new environments. Perceptive problem-solver. Detail-oriented. Team-player. Communicates effectively.
                  An endless well of curiosity. Driven. And
                  contrary to popular belief, <em>not actually a banana.</em>
                  </p>
                </div>
              </div>
              {/* row-2 */}
              <div className="flex flex-col items-center justify-center w-full px-3 mb-6 md:border-l-2 md:w-1/3 md:mb-0">
                <h3
                  className={`tracking-widest mb-2 text-lg text-white font-monoton  duration-500 hover:text-purple-200 ${
                    !isBananaUp ? "rotate-180" : null
                  }`}
                  onClick={flip}
                >
                  <a
                    href="./self-portrait.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Self-Portrait
                  </a>
                </h3>
                <hr className="w-2/3 mb-4" />
                <div
                  className={`flex justify-end p-6 w-2/3 h-auto bg-black rounded-full border-white border-2 transform ease-in-out  duration-1000 hover:border-purple-200 cursor-pointer ${
                    !isBananaUp ? "rotate-180" : null
                  }`}
                  onClick={flip}
                >
                  <Image
                    src="/im-a-banana.png"
                    alt="self-portrait"
                    width={200}
                    height={200}
                    className={`flex justify-end p-6 w-2/3 h-auto bg-black rounded-full border-white border-2 transform ease-in-out duration-1000 hover:border-purple-300 cursor-pointer animate-fade-in-up ${
                      !isBananaUp ? "rotate-180" : null
                    }`}
                  />
                </div>
                <hr className="w-2/3 mt-4" />
                <h3 className="mt-2 text-lg tracking-widest text-white duration-500 font-monoton hover:text-purple-200 ">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Self-Résumé
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;