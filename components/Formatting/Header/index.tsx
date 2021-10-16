const Header = ({ pageTitle }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-6xl mx-auto mb-8 mix-blend-screen animate-fade-in-down">
      <hr className="w-1/3 m-8" />
      <h1 className="text-3xl tracking-widest uppercase font-outline sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl white-outline">
        {pageTitle}
      </h1>
      <hr className="w-1/3 m-8" />
    </div>
  );
};

export default Header;
