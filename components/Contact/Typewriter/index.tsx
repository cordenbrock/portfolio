import { WindupChildren, CharWrapper } from "windups";

const Message = ({ children }) => {
  return (
      <span className="inline-block py-2 text-2xl text-green-600 animate-bounce">
        {children}
      </span>
  );
};

const Typewriter = () => {
  return (
    <WindupChildren>
      <CharWrapper element={Message}>{"Message"} {<span>&nbsp;</span>} {"Sent!"}</CharWrapper>
    </WindupChildren>
  );
};

export default Typewriter;
