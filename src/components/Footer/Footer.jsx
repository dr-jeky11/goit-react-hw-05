import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <Link to="/">
          <Logo />
        </Link>
        <p className={s.rights}>
          &copy; 2024 FindYourMovie All rights are reserverd.
        </p>
      </div>
    </footer>
  );
}
