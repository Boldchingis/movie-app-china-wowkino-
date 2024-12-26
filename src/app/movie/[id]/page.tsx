import { options } from "@/app/Section";
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

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        alt={data.title}
      />
      <p>{data.title}</p>
      <p>{data.overview}</p>
      <p>Director: {detail.crew.}</p>
    </div>
  );
}
