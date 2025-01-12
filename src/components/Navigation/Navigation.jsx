import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navigationLink, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.navigationList}>
          <li className={s.navigationItem}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={s.navigationItem}>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
