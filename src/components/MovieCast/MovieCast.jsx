import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCastInfo } from "../../moviesApi/movies-api.js";
import { createActorUrl } from "../../helpers/createImageUrl.js";

import s from "./MovieCast.module.css";
import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const handleCastFetch = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getCastInfo(movieId);
        setCast(data.cast.slice(0, 5));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleCastFetch();
  }, [movieId]);

  return (
    <div className={s.castSection}>
      {cast.length > 0 && (
        <ul className={s.castList}>
          {cast.map((actor) => {
            return (
              <li key={actor.id} className={s.actorItem}>
                <img
                  src={createActorUrl(actor.profile_path, 200)}
                  alt={`${actor.name} photo`}
                  className={s.actorPhoto}
                />
                <p>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length < 1 && !loading && <p>No data</p>}
      {error && <Error />}
      {loading && <Loader />}
    </div>
  );
}
