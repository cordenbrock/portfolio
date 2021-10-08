import Header from "@Formatting/Header";
import ContactForm from "@Contact/ContactForm";

type Content = {
  pageTitle: string;
};

const Contact = () => {
  const content: Content = {
    pageTitle: "Contact",
  };

  return (
    <main className="flex flex-col items-center justify-center h-full mx-auto">
      <div className="h-24"></div>
      <Header pageTitle={content.pageTitle} />
      <ContactForm />
    </main>
  );
};

export default Contact;
