import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

import s from "./Navigation.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const createnavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

export default function Navigation() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.navigation}>
          <div className={s.navBlock}>
            <div className={s.pageNav}>
              <NavLink to="/" className={createnavLinkClass}>
                <Logo />
              </NavLink>
              <div className={s.biggerScreenlink}>
                <NavLink to="/movies" className={createnavLinkClass}>
                  Movies
                </NavLink>
              </div>

              <IoMenu className={s.menuIcon} size={32} color="whitesmoke" />
            </div>

            <div className={s.biggerScreenlink}>
              <NavLink to="/profile" className={createnavLinkClass}>
                Log in
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
