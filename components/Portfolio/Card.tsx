const Card = () => {
  return (
    <section className="px-4 mx-auto mb-12 max-w-7xl sm:px-6 lg:px-4">
      <div>
        <h2 className="text-6xl font-extrabold text-black black-outline">PORTFOLIO</h2>
        <section className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          <div className="relative w-full h-64 overflow-hidden transition duration-300 ease-in-out bg-center bg-cover rounded-lg shadow-lg bg-m-u group hover:shadow-2xl">
            <div className="absolute inset-0 transition duration-300 ease-in-out bg-purple-100 bg-opacity-90 group-hover:opacity-10"></div>
            <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                <a
                  className="text-2xl font-bold text-center text-white text-shadow"
                  href="https://www.musica-universalis.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="absolute inset-0 transform hover:-translate-y-10"></span>
                  Musica Universalis
                </a>
              </h3>
            </div>
          </div>
          <div className="relative w-full h-64 overflow-hidden transition duration-300 ease-in-out bg-center bg-cover rounded-lg shadow-lg group hover:shadow-2xl bg-paro">
            <div className="absolute inset-0 transition duration-300 ease-in-out bg-gray-900 bg-opacity-90 group-hover:opacity-10"></div>
            <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                <a
                  className="text-2xl font-bold text-center text-white text-shadow"
                  href="http://paro-for-president.herokuapp.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="absolute inset-0"></span>
                  Paro
                </a>
              </h3>
            </div>
          </div>
          <div className="relative w-full h-64 overflow-hidden transition duration-300 ease-in-out bg-center bg-cover rounded-lg shadow-lg group hover:shadow-2xl bg-exchangerator">
            <div className="absolute inset-0 transition duration-300 ease-in-out bg-green-50 bg-opacity-90 group-hover:opacity-10"></div>
            <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-4">
              <h3 className="text-center">
                <a
                  className="text-2xl font-bold text-center text-white text-shadow"
                  href="https://exchangerator.herokuapp.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="absolute inset-0"></span>
                  Exchangerator{" "}
                </a>
              </h3>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
