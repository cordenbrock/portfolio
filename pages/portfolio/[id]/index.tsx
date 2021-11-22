import { useRouter } from "next/router";
import { content } from "lib/portfolio";
import Header from "@Formatting/Header";
import Image from "next/image";

const App = () => {
  const router = useRouter();
  const { id } = router.query;
  const parseUrlIdAndReturnIdContent = () => {
    const filtered = content.apps.filter((app) => app.id === id);

    if (filtered.length > 0) {
      return filtered[0];
    }
  };

  const app = parseUrlIdAndReturnIdContent();

  return (
    <main className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
      <div className="h-24 backdrop-filter backdrop-blur"></div>
      <Header pageTitle={content.pageTitle} />
      <section className="max-w-5xl p-8 mx-auto border-2 bg-opacity-10 backdrop-filter backdrop-blur-sm bg-sepia rounded-xl animate-fade-in-up">
        <div className="flex flex-wrap">
          <div className="w-full mb-6 sm:pr-10 md:w-2/3 md:mb-0">
            <h3 className="my-4 tracking-widest text-secondary sm:text-xl md:text-4xl font-monoton">
              {app.name}
            </h3>
            <hr />
            <br />
            <p className="tracking-wider text-white text-md 2xl:text-xl">
              {app.description}
            </p>
          </div>

          {/* right row*/}
          <div className="flex flex-col items-center justify-center w-full px-4 mb-6 sm:pl-10 md:border-l md:w-1/3 md:mb-0">
            <a
              href={`./../${id}.png`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/${app.id}.png`}
                alt="app image"
                width={260}
                height={140}
                className="rounded-lg shadow-md"
                placeholder="blur"
                blurDataURL={app.blurDataURL}
              />
            </a>
            <div className="flex w-full p-2 justify-evenly">
              {app.href && (
                <a href={app.href} target="_blank" rel="nooperner noreferrer">
                  <span className="text-xl text-white font-monoton hover:text-purple-200">
                    Site
                  </span>
                </a>
              )}
              {app.href && <span className="text-secondary">| |</span>}
              <a href={app.gitLink} target="_blank" rel="nooperner noreferrer">
                <span className="text-xl text-white font-monoton hover:text-purple-200">
                  Code
                </span>
              </a>
            </div>
            <div className="w-full">
              <hr />
              <h3 className="pt-2 text-center text-white uppercase text-md">
                Tech Specs
              </h3>
              <ul className="pt-4 text-xs text-center text-secondary">
                {app.techUsed.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default App;
