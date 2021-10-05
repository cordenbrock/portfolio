import Typewriter from "@Home/Windup";

const Header = () => {
  return (
    <div className="flex h-full">
      <div className="m-auto">
        <h1 className="px-4 py-4 text-4xl text-clear-black sm:text-7xl black-outline font-outline">
          Cory Nordenbrock
        </h1>
        <h3 className="px-8 text-gray-300 md:text-3xl md:text-center">
            <Typewriter />
      <span className="animate-cursor">|</span>

        </h3>
      </div>
    </div>
  );
};

export default Header;
