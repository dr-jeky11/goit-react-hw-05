import { Link, useNavigate } from "react-router-dom";
import imgUrl from "../../images/404.png";

import s from "./NotFoundPage.module.css";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [calldown, setCalldown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCalldown((prev) => prev - 1);

      if (calldown < 1) {
        navigate("/", { replace: true });
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [calldown, navigate]);

  return (
    <main>
      <section className={s.section}>
        <div className={s.container}>
          <img src={imgUrl} alt="404 error" width={900} className={s.img} />
          <p className={s.text}>Page was not found.</p>
          <p className={s.linkText}>
            You are being redirected to the
            <Link to="/" className={s.link}>
              Home Page
            </Link>
            after {calldown} seconds
          </p>
        </div>
      </section>
    </main>
  );
}
