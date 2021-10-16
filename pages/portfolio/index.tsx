import Header from "@Formatting/Header";
import AppCard from "@Portfolio/AppCard";
import { content } from "lib/portfolio";

export default function Portfolio() {

  return (
    <main className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
      <div className="h-24 backdrop-filter backdrop-blur"></div>
      <Header pageTitle={content.pageTitle} />
      <section className="p-8 mx-auto border-2 rounded-xl bg-sepia bg-opacity-10 backdrop-filter backdrop-blur-sm animate-fade-in-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {content.apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>
    </main>
  );
}