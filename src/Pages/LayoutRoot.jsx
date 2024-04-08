import { Outlet, NavLink } from "react-router-dom";
import styles from "./LayoutRoot.module.css";

export function LayoutRoot() {
  const navinfo = [
    {
      TO: "/",
      DisplayName: "HOME",
    },
    {
      TO: "/article/",
      DisplayName: "ARTICLE",
    },
  ];
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ul>
            {navinfo.map((info) => {
              return (
                <li key={info.DisplayName}>
                  <NavLink to={info.TO}> {info.DisplayName}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>ProsjektOppgaveDel2</p>
      </footer>
    </>
  );
}
