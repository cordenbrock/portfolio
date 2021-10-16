import Typewriter from "@Home/Typewriter";

const Landing = () => {
  return (
    <div className="flex h-full">
      <div className="m-auto">
        <h1 className="p-4 text-4xl tracking-wider duration-1000 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl white-outline font-outline mix-blend-screen animate-fade-in-down">
          Cory Nordenbrock
        </h1>
        <h3 className="px-4 text-lg text-center text-gray-300 duration-1000 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl animate-fade-in-up">
          <Typewriter />
          <span className="animate-cursor">|</span>
        </h3>
      </div>
    </div>
  );
};

export default Landing;
