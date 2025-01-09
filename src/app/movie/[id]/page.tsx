import { options } from "@/app/Section";
import { Star } from "lucide-react";
import { json } from "stream/consumers";
import { Play } from "lucide-react";
type Props = {
  params: {
    id: string;
  };
};

export default async function Home({ params }: Props) {
  const API_URL = `https://api.themoviedb.org/3/movie/${params.id}`;
  const API_CRE = `https://api.themoviedb.org/3/movie/${params.id}.credits`;
  const res = await fetch(API_CRE, options);
  const detail = await res.json();
  const response = await fetch(API_URL, options);
  const data = await response.json();
  // const crew = dataCredits?.crew;
  // const director = crew.find((cast) => cast.job === "Director");

  return (
    <div>
      <div className="flex flex-col ">
        <p className="text-[24px] font-[600] leading-[32px]">{data.title}</p>
        <div className="flex items-center gap-2 text-sm ">
          <p>{data.release_date}</p>
          <p>•</p>
          <p>{data.runtime} min</p>
          <div className="ml-4">
            <div className="flex items-center gap-2">
              <p className="font-medium flex items-center gap-1">
                <Star className="text-yellow-400 w-[20px] h-[20px] " />
                {data.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-500 ">/10</p>
            </div>
            <p className="ml-4 mt-2">
              {data.popularity >= 1000
                ? (data.popularity / 1000).toFixed(1) + "K"
                : data.popularity}
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-10">
        <div>
          <img
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="Backdrop"
          ></img>
          <div className="absolute bottom-4 left-5 z-10 text-white flex gap-2">
            <Play /> Play trailer
          </div>
          <p></p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="flex ml-6 mr-6 space-x-8">
        <img
          className=" sm: w-[100px] h-[148px]"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
        <p className="text-[#09090B] font-[400] text-base">{data.overview}</p>
      </div>

      <p>Director:</p>
    </div>
  );
}
