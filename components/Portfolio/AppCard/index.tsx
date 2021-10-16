import Link from "next/link";

const AppCard = ({ name, id, imgSelector }) => {

  return (
    <div
      className={`relative w-full h-32 2xl:h-48 duration-300 ease-in-out bg-cover rounded transform hover:scale-105 hover:-translate-y-2
        ${imgSelector}`}
    >
      <Link href="/portfolio/[id]" as={`/portfolio/${id}`}>
        <a
          className="text-purple-200 cursor-pointer hover:text-purple-400 "
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 z-10 bg-black bg-opacity-30 hover:bg-opacity-5"></div>
          <div className="relative flex items-end justify-start w-full h-full px-4 duration-1000 transform translate-y-4">
            <span className="absolute inset-0"></span>
            <h3 className="text-3xl 2xl:text-3xl font-monoton text-shadow">
              {name}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AppCard;
