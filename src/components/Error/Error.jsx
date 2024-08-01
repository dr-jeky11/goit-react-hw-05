import errorImg from "../../images/error.png";

import s from "./Error.module.css";

export default function Error() {
  return (
    <main>
      <div className={s.container}>
        <img
          className={s.image}
          src={errorImg}
          alt="Computer tried to connect to the server but failed"
        />
        <p className={s.text}>Oops, something went wrong.</p>
        <p className={s.text}>Please reload this page.</p>
      </div>
    </main>
  );
}
