import Header from "@Formatting/Header";
import Card from "@About/AboutCard";

type Content = {
  pageTitle: string;
  card: Card;
};

type Card = {
  title: string;
  subtitle: string;
  origins: string;
  attributes: string;
};

const About = () => {
  const content: Content = {
    pageTitle: "About",
    card: {
      title: "Profile",
      subtitle: `<strong>Maker. &nbsp; Tinkerer. &nbsp; Creative.</strong>`,
      origins: `Originally from the good ol&apos; <strong>Midwest</strong>,
      now hailing from the great <strong>PNW</strong>. First
      generation college-grad humanities major <em>turned</em> math
      teacher, <em>turned </em>
      backpacking nomad, <em>turned </em> field service technician,
      <em>turned </em>
      <strong>self-taught developer </strong> with a coding bootcamp
      and <strong>professional web-dev experience</strong> now under
      his belt.`,
      attributes: `
      An endless well of
      curiosity. Has a knack for quickly picking up new skills and adapting to
      new environments. <strong>Perceptive problem-solver</strong>. Detail-oriented.
      Communicates effectively. <strong>Team-player</strong>. Driven. And contrary to popular belief,
      <em>not actually a banana.</em>`,
    },
  };

  return (
    <main className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
      <div className="h-24 backdrop-filter backdrop-blur"></div>
      <Header pageTitle={content.pageTitle} />
      <Card {...content.card} />
    </main>
  );
};

export default About;
