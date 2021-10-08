import Header from "@Formatting/Header";
import Card from "@Portfolio/Card";

type Content = {
  pageTitle: string;
  apps: App[];
};

type App = {
    name: string;
    href: string;
    img: string;
}

export default function Portfolio() {
  const content: Content = {
    pageTitle: "Portfolio",
    apps: [
      {
        name: "Musica Universalis",
        href: "https://www.musica-universalis.com/",
        img: "m-u",
      },
      {
        name: "Paro",
        href: "http://paro-for-president.herokuapp.com/",
        img: "paro",
      },
      {
        name: "Exchangerator",
        href: "https://exchangerator.herokuapp.com/",
        img: "exchangerator",
      },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-center h-full mx-auto">
      <div className="h-24"></div>
      <Header pageTitle={content.pageTitle} />
      <section className="p-8 mx-auto border-2 rounded-xl bg-primary animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          {content.apps.map((app, index) => (
            <Card key={index} {...app} />
          ))}
        </div>
      </section>
    </main>
  );
}
