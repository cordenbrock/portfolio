import {
  Effect,
  Pace,
  useRewind,
  useWindupString,
  WindupChildren,
} from "windups";

const RewindButton = () => {
  const [text] = useWindupString("Developer");
  const rewind = useRewind();

  return (
    <WindupChildren>
        <button
          className="text-purple-200 duration-1000 ease-in-out transform hover:-translate-y-1"
          onClick={rewind}
        >
          {text}
        </button>
    </WindupChildren>
  );
};

const Typewriter = () => {
  return (
    <WindupChildren>
      <Pace getPace={(char) => ((char === " ") || (char === "-") ? 600 : 100)}>
        <span className="text-gray-400">{" < "}</span>
        <span className="text-white">{"Full-Stack "}</span>
        <RewindButton />
        <span className="text-gray-400">{" />"}</span>
      </Pace>
    </WindupChildren>
  );
};

export default Typewriter;
