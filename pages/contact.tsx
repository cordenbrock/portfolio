import ContactForm from "@components/Contact/ContactForm"

const Contact = () => {
  return (
    <main className="flex items-center justify-center h-full">
      <h1 className="p-8 m-8 text-6xl text-center text-black black-outline">Contact</h1>
      <ContactForm />
    </main>
  )
}

export default Contact