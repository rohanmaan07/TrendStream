import React from "react";
import { Link } from "react-router-dom";

export function Cards({ data, title }) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No popular items available.</p>;
  }

  return (
    <div className="w-full flex flex-wrap gap-6 justify-center p-4">
      {data.map((d, i) => (
        <div
          key={i}
          className="min-w-[250px] w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-black rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
        >
          {/* Image Section */}
          <Link to={`/${d.media_type || title}/details/${d.id}`} className="relative block w-full h-[200px] rounded-t-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path || d.profile_path}`}
              alt={d.name || d.title || d.original_name || d.original_title || "Movie Poster"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          </Link>

          {/* Content Section */}
          <div className="p-4 text-white">
            <h1 className="text-lg font-semibold truncate">
              {d.name || d.title || d.original_name || d.original_title || "Title not available"}
            </h1>
            <p className="text-sm text-gray-400 mt-2 leading-snug">
              {d.overview ? `${d.overview.slice(0, 100)}...` : "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
