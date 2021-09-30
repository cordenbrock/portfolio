import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "cordenbrock@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Copied to Clipboard!");
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`${email}`);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <nav>
      <AiOutlineMail
        onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
      />
      <div className="absolute w-48 p-2 text-white transform md:-translate-x-20">
        <p className="text-xs text-center">
          {copySuccessMessage} {instructions}
        </p>
      </div>
    </nav>
  );
};

export default Email;
