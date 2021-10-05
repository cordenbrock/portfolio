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
          <div className="flex items-center justify-center w-full max-w-4xl mx-auto mb-8">
            <hr className="w-1/3 m-8" />
            <h1 className="text-lg font-extrabold text-black uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-8xl black-outline">
              About
            </h1>
            <hr className="w-1/3 m-8" />
          </div>

          <div className="p-8 mx-auto border-2 bg-primary max-w-7xl rounded-xl">
            <div className="flex flex-wrap ">
              <div className="w-full pl-3 mb-6 sm:pr-10 md:w-2/3 md:mb-0">
                <h3 className="my-4 text-center sm:text-xl md:text-2xl font-outline black-outline">
                  T h e &nbsp; W h o / W h a t / W h e r e / W h e n / W h y
                </h3>
                <hr />
                <br />
                <div className="text-sm tracking-wider text-white 2xl:text-lg">
                  <p className="text-lg tracking-widest 2xl:text-xl">
                    <strong>Maker. &nbsp; Tinkerer. &nbsp; Creative.</strong>
                  </p>
                  <br />
                  <p>
                    Originally from the <strong>Midwest</strong>, now hailing
                    from the great <strong>PNW</strong>. First generation
                    college-grad of humanities <em>turned</em> teacher of
                    mathematics, <em>turned </em>
                    backpacking nomad, <em>turned </em> field service
                    technician, <em>turned </em>
                    <strong>self-taught developer </strong> with a coding
                    bootcamp and{" "}
                    <strong>professional web-dev experience</strong> now under
                    his belt.
                  </p>
                  <br />
                  Has a knack for quickly picking up new skills and adapting to
                  new environments. Communicates effectively. Detail-oriented.
                  Team-player. Driven. An endless well of curiosity. And
                  contrary to popular belief, <em>not actually a banana.</em>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full px-3 mb-6 md:border-l-2 md:w-1/3 md:mb-0">
                <h3
                  className={`tracking-widest mb-2 text-lg text-white font-monoton ${
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
                  className={`flex justify-end p-6 ease-out duration-1000 transform w-2/3 h-auto bg-black rounded-full border-white border-2 cursor-pointer ${
                    !isBananaUp ? "rotate-180" : null
                  }`}
                >
                  <Image
                    src="/im-a-banana.png"
                    alt="self-portrait"
                    width={200}
                    height={200}
                    onClick={flip}
                  />
                </div>
                <hr className="w-2/3 mt-4" />
                <h3 className="mt-2 text-lg tracking-widest text-white font-monoton">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Résumé
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

{
  /* <div className="flex justify-evenly">
  <div className="flex justify-start">
    <h3 className="my-4 text-3xl font-extrabold font-outline black-outline">
      T e c h &nbsp; S t a c k
    </h3>
  </div>
  <div className="flex">
    <h3 className="my-4 text-3xl font-extrabold font-outline black-outline">
      T e c h &nbsp; V i s i o n
    </h3>
  </div>
</div>; */
}
