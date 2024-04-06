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
              <NavLink to="/">HOME</NavLink>
            </li>
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
