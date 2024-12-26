import { SeeMore } from "@/components/ui/seeMore";
import { Star } from "lucide-react";
import Link from "next/link";
type Movie = {
  title: string;
  vote_average: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
};

type Props = {
  title: string;
  endpoint: string;
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";
export const Section = async ({ title, endpoint }: Props) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const data = await res.json();
  const movies: Movie[] = data.results;

  return (
    <div className="p-3">
      <h1 className="font-semibold flex place-content-between text-[24px] mt-10">
        {title} <SeeMore />
      </h1>

      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:px-7">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link href={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-t-lg"
              />
              <div className="bg-gray-100 min-h-28 rounded-b-lg p-4">
                <div className="flex">
                  <p className="font-medium flex items-center gap-1">
                    <Star className="size-[16px] text-yellow-400" />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-gray-500">/10</p>
                </div>
                <p className="font-semibold">{movie.title}</p>
                <p>{movie.id}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
