import { SeeMore } from "@/components/ui/seeMore";
import { title } from "process";
// import { Movie } from "./types";
type Props = {
  title: string;
  endpoint: string;
};
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
const options = {
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
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <div key={movie.id}>{movie.title} </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
