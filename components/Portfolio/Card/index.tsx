const Card = ({ name, href, img }) => {
  return (
        <div className={`relative w-full h-64 overflow-hidden transition duration-300 ease-in-out bg-center bg-cover rounded shadow-lg bg-${img} group hover:shadow-2xl`}>
          <div className="absolute inset-0 transition duration-300 ease-in-out bg-purple-100 bg-opacity-90 group-hover:opacity-10"></div>
          <div className="relative flex items-center justify-center w-full h-full px-4 duration-1000 transform sm:px-6 lg:px-4 hover:translate-y-16">
            <h3 className="text-center">
              <a
                className="text-2xl font-bold text-center text-white text-shadow"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="absolute inset-0"></span>
                {name}
              </a>
            </h3>
          </div>
        </div>

  );
};

export default Card;
