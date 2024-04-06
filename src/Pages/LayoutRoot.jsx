import { Outlet, NavLink } from "react-router-dom";

export function LayoutRoot() {
  return (
    <>
      <header>
        <nav>
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
