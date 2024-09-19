import { Link } from "react-router-dom";

export function Sidebar() {

  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 bg-gray-900 text-white p-3  ">
        <h1>
          <i className="ri-tv-fill mr-3 "></i>
          <span className="text-2xl ">Trend Stream</span>
        </h1>
        <nav className="flex flex-col text-white text-xl gap-12">
          <h1 className="text-white font-semibold text-xl mt-12 ">New feed</h1>
          <Link to="/trending"  className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="ri-fire-fill "></i> Trending
          </Link>
          <Link to="/popular" className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="ri-magic-fill mr-2"></i>Popular
          </Link>
          <Link to="/movie" className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="ri-movie-fill mr-2"></i>Movies
          </Link>
          <Link to="/tv" className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="ri-slideshow-2-fill mr-2"></i>Tv Shows
          </Link>
          <Link  to="/people" className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="ri-user-fill mr-2"></i>People
          </Link>
        </nav>
        {/* <hr className=" border-zinc-400 h-[1px] bg-black mt-1"></hr>
        <nav className="flex flex-col text-white text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-8">Website Information</h1>
          <Link className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className="mr-2 ri-information-fill"></i>About
          </Link>
          <Link className="hover:bg-white hover:text-black duration-300 rounded-lg p-3">
            <i className=" mr-2 ri-contacts-book-2-fill"></i>Contact us
          </Link>
        </nav> */}
      </div>
    </>
  );
}
