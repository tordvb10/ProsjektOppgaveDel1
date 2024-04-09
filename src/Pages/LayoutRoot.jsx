import { Outlet, NavLink } from "react-router-dom";
import styles from "./LayoutRoot.module.css";

export function LayoutRoot() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <h2>conduit</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.headerContainer}>
          <h1>conduit</h1>
          <h3>A place to share your knowledge</h3>
        </div>
      </header>
      <Outlet />
      <footer>
        <p>ProsjektOppgaveDel2</p>
      </footer>
    </>
  );
}
