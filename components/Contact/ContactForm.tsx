import { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(
    "Please fill out each field"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      let data = {
        name,
        email,
        message,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
          setSubmissionStatus("Message Sent!");
        }
      });
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setSubmissionStatus("Please fill out each field");
      }, 10000);
    }
  }, [submitted]);

  return (
    <form className="w-full max-w-xl p-8 m-8 bg-gray-900 rounded">
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-black bg-gray-200 border border-purple-200 rounded appearance-none focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="name"
            type="text"
            value={name}
            placeholder="e.g., Bill Murray"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-black bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="e.g., cinderellastory@billmurray.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-black bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            name="message"
            value={message}
            placeholder="e.g., Hi, my name is Bill Murray and I have a brilliant idea for an app!"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="px-4 py-2 font-bold text-gray-900 bg-gray-400 rounded shadow hover:bg-gray-900 hover:text-gray-400 focus:shadow-outline focus:outline-none"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </button>
          {submitted ? (
            <span className="text-xs text-gray-400">{submissionStatus}</span>
          ) : null}
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
};

export default ContactForm;
