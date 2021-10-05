import Card from "@Portfolio/Card";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-8 mx-auto">
      <div className="w-full transform translate-y-12">
        <div className="flex items-center justify-center w-full mx-auto mb-8 animate-fade-in-down">
          <hr className="w-1/3 m-8" />
          <h1 className="text-lg font-extrabold text-black uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-8xl black-outline">
            Portfolio
          </h1>
          <hr className="w-1/3 m-8" />
        </div>
        <Card />
      </div>
    </main>
  );
}
