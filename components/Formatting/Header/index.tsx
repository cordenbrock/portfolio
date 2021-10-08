const Header = ({ pageTitle }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-5xl mx-auto mb-8 animate-fade-in-down">
      <hr className="w-1/3 m-8" />
      <h1 className="text-3xl font-extrabold text-black uppercase sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl white-outline">
        {pageTitle}
      </h1>
      <hr className="w-1/3 m-8" />
    </div>
  );
};

export default Header;
