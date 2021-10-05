import ContactForm from "@Contact/ContactForm";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full mx-auto max-w-7xl">
      <div className="flex items-center justify-center w-full h-48 max-w-4xl mx-auto rounded-md animate-fade-in-down">
        <hr className="w-1/3 m-8" />
        <h1 className="text-3xl font-extrabold text-black uppercase sm:text-4xl md:text-5xl lg:text-7xl black-outline">
          Contact
        </h1>
        <hr className="w-1/3 m-8" />
      </div>
        <ContactForm />
    </main>
  );
};

export default Contact;
