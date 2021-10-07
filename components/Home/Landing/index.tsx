import Typewriter from "@Home/Typewriter";

const Landing = () => {
  return (
    <div className="flex h-full">
      <div className="m-auto">
        <h1 className="p-4 text-4xl duration-1000 sm:text-7xl text-clear-black white-outline font-outline animate-fade-in-down">
          Cory Nordenbrock
        </h1>
        <h3 className="px-8 text-gray-300 md:text-3xl md:text-center animate-fade-in-up">
          <Typewriter />
          <span className="animate-cursor">|</span>
        </h3>
      </div>
    </div>
  );
};

export default Landing;
