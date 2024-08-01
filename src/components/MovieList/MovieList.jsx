import { Link, useLocation } from "react-router-dom";

import s from "./MovieList.module.css";

import { createImageUrl } from "../../helpers/createImageUrl";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(
        ({
          id,
          original_title,
          backdrop_path,
          title,
          release_date,
          poster_path,
        }) => {
          return (
            <li key={id} className={s.listItem}>
              <Link
                to={`/movies/${id}`}
                state={location}
                className={s.movieLink}>
                <div>
                  <img
                    src={createImageUrl(poster_path, backdrop_path, 300)}
                    alt={`Poster of ${title}`}
                    className={s.poster}
                    width={300}
                    height={400}
                  />
                  <p className={s.title}>{original_title}</p>
                  <p className={s.date}>
                    Released: {release_date ? release_date : "Unknown"}
                  </p>
                </div>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
