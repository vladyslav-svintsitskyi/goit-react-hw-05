import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navigationLink, isActive && s.active);
};

const Header = () => {
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

export default Header;
