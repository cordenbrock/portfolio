import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        reset();
      }
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl px-4 mx-auto h-72 animate-fade-in-up"
      >
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full px-4 py-3 mb-3 leading-tight text-black bg-gray-300 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.name ? "ring-2 ring-red-900" : null
              }`}
              id="name"
              name="name"
              placeholder="e.g., Bill Murray"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="block text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className={`w-full px-4 py-3 mb-3 leading-tight text-black bg-gray-300 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.email ? "ring-2 ring-red-900" : null
              }`}
              id="email"
              name="email"
              placeholder="e.g., au_revoir_gopher@billmurray.com"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="block text-sm text-red-700">
                This field is required
              </span>
            )}
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
              className={`h-24 2xl:h-48 block w-full px-4 py-3 mb-3 leading-tight text-black bg-gray-300 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.message ? "ring-2 ring-red-900" : null
              }`}
              id="message"
              name="message"
              placeholder="e.g., Hi, my name is Bill Murray and I have a brilliant idea for an app!"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="block text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between">
            <button
              className="px-4 py-2 font-bold text-gray-900 bg-gray-400 rounded shadow flex-start hover:bg-gray-900 hover:text-gray-400 focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Send
            </button>
            {isSubmitSuccessful && !isDirty && (
              <span className="py-2 pl-4 text-center text-green-600 flex-end">
                Message Sent!
              </span>
            )}
        </div>
      </form>

      {/* <form className="w-2/3 p-4 bg-gray-900 rounded-md">
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p className="text-xs italic text-red-500">
            Please fill out this field.
          </p>
        </div>

        <div className="w-full px-3 md:w-1/2">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            cols={30}
            rows={2} 
            className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
          ></textarea>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="px-4 py-2 font-bold text-white bg-teal-400 rounded shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </form> */}
    </>
  );
};

export default ContactForm;
