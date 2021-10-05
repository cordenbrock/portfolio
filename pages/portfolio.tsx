import Card from "@Portfolio/Card";

export default function Portfolio() {
  return (
    <main className="flex flex-col justify-center h-full mx-auto max-w-7xl">
      <div className="flex items-center justify-center w-full">
        <hr className="w-1/3 m-8" />
        <h1 className="font-extrabold text-black text-7xl black-outline">
          PORTFOLIO
        </h1>
        <hr className="w-1/3 m-8" />
      </div>
      <Card />
    </main>
  );
}
