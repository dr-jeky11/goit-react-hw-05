import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

import { getMovieById } from "../../moviesApi/movies-api";
import { createPosterUrl } from "../../helpers/createImageUrl";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import BackToButton from "../../components/BackToButton/BackToButton";

import s from "../MovieDetailsPage/MovieDetails.module.css";
import clsx from "clsx";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";

const createNalLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.activeNavLink);
};

const timeFormat = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  const { movieId } = useParams();

  useEffect(() => {
    try {
      setError(false);
      const handleFetch = async () => {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      };
      handleFetch();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [movieId]);

  return (
    <main>
      {movie && (
        <section className={s.section}>
          <div className={s.container}>
            <BackToButton to={backLinkRef.current}>Back</BackToButton>
            <div className={s.mainPage}>
              <img
                src={createPosterUrl(
                  movie.poster_path,
                  movie.backdrop_path,
                  400
                )}
                alt={movie.title}
                width={400}
                height={600}
                className={s.image}
              />
              <div className={s.movieInfo}>
                <h2 className={s.title}>{movie.title}</h2>
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.homepageLink}>
                  Watch here
                </a>
                <h3 className={s.subtitle}>{movie.release_date}</h3>

                <div className={s.genresDetails}>
                  <h3 className={s.subtitle}>Genres:</h3>
                  <ul className={s.genresList}>
                    {movie.genres.map((genre) => {
                      return (
                        <li key={genre.id} className={s.genreItem}>
                          <span className={s.itemText}>{genre.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className={s.countryDetails}>
                  <h3 className={s.subtitle}>Country</h3>
                  <ul className={s.countryList}>
                    {movie.origin_country.map((country) => {
                      return (
                        <li key={country} className={s.countryItem}>
                          <span className={s.itemText}>{country}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {movie.spoken_languages.length > 0 && (
                  <div className={s.language}>
                    <h3 className={s.subtitle}>Language:</h3>
                    <p className={s.langOutput}>
                      {movie.spoken_languages[0].english_name}
                    </p>
                  </div>
                )}

                <div className={s.duration}>
                  <h3 className={s.subtitle}>Duration:</h3>
                  <p> {timeFormat(movie.runtime)}</p>
                </div>

                <div className={s.vote}>
                  <h3 className={s.subtitle}>Rate:</h3>
                  <p className={s.duration}>{movie.vote_average}</p>
                </div>

                <div className={s.descriptionWrapper}>
                  <h3 className={s.movieSubtitle}>Description:</h3>
                  <p className={s.description}>{movie.overview}</p>
                </div>
              </div>
            </div>

            <div className={s.additionalInfo}>
              <NavLink to="cast" className={createNalLinkClass}>
                Cast
              </NavLink>

              <NavLink to="reviews" className={createNalLinkClass}>
                Reviews
              </NavLink>
            </div>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>

            <SimilarMovies movieId={movieId} />
          </div>
        </section>
      )}
      {error && <Error />}
    </main>
  );
}
