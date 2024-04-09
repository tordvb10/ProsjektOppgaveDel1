import { Outlet, NavLink } from "react-router-dom";
import styles from "./LayoutRoot.module.css";

export function LayoutRoot() {
  const navinfo = [
    {
      TO: "/",
      DisplayName: "Home",
    },
    {
      TO: "/article/",
      DisplayName: "Article",
    },
  ];
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <h2>conduit</h2>
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
        <div className={styles.headerContainer}>
          <h1>conduit</h1>
          <h3>A place to share your knowledge</h3>
        </div>
      </header>
      <Outlet />
      <footer className={styles.footer}>
        <img src="../Images/github.png" alt="Github Logo" />

        <p>React Prosjekt: Tord & Erik</p>
      </footer>
    </>
  );
}
