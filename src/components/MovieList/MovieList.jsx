import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import { createImageUrl } from "../../helpers/createImageUrl";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie, index) => {
        const {
          id,
          original_title,
          backdrop_path,
          title,
          release_date,
          poster_path,
        } = movie;
        const imageUrl = createImageUrl(poster_path, backdrop_path, 300);
        const uniqueKey = `${id}-${index}`;

        return (
          <li key={uniqueKey} className={s.listItem}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={s.movieLink}
              aria-label={`View details for ${title}`}>
              <div>
                <img
                  src={imageUrl}
                  alt={`Poster of ${title}`}
                  className={s.poster}
                  width={300}
                  height={400}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "path/to/placeholder/image.jpg";
                  }}
                />
                <p className={s.title}>{original_title}</p>
                <p className={s.date}>
                  Released: {release_date ? release_date : "Unknown"}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
