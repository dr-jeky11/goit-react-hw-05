import { Link } from "react-router-dom";

import s from "./BackToButton.module.css";

export default function BackToButton({ to, children }) {
  return (
    <Link to={to} className={s.button}>
      {children}
    </Link>
  );
}
