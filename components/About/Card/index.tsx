import { useState } from "react";
import Image from "next/image";

const Card = ({ title, subtitle, origins, attributes }) => {
  const [isBananaUp, setIsBananaUp] = useState(true);
  const flip = () => {
    setIsBananaUp(!isBananaUp);
  };

  return (
    <div className="p-6 mx-auto border-2 bg-primary max-w-7xl rounded-xl animate-fade-in-up">
      <div className="flex flex-wrap ">
        <div className="w-full pl-3 mb-6 sm:pr-10 md:w-2/3 md:mb-0">
          <h3 className="my-4 tracking-widest sm:text-xl md:text-4xl font-outline white-outline">
            {title}
          </h3>
          <hr />
          <br />
          <div className="text-sm tracking-wider text-white 2xl:text-lg">
            <p
              className="text-lg tracking-widest 2xl:text-xl"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: origins }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: attributes }}></p>
          </div>
        </div>

        {/* abstract to new component*/}
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
            className={`flex justify-end p-6 h-auto bg-clear-black backdrop-filter backdrop-blur-3xl rounded-full border-white border-2 transform ease-in-out  duration-1000 hover:border-purple-200 cursor-pointer ${
              !isBananaUp ? "rotate-180" : null
            }`}
            onClick={flip}
          >
            <Image
              src="/im-a-banana.png"
              alt="self-portrait"
              width={175}
              height={175}
              className={`flex justify-end p-6 h-auto rounded-full border-white border-2 transform ease-in-out duration-1000 hover:border-purple-300 cursor-pointer animate-fade-in-up ${
                !isBananaUp ? "rotate-180" : null
              }`}
            />
          </div>
          <hr className="w-2/3 mt-4" />
          <h3 className="mt-2 text-lg tracking-widest text-white duration-500 font-monoton hover:text-purple-200 ">
            <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
              Self-Résumé
            </a>
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Card;
