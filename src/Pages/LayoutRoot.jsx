import { Outlet, NavLink } from "react-router-dom"
export function LayoutRoot(){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                            to="/"
                            > HOME
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
            <footer>
                <p>ProsjektOppgaveDel2</p>
            </footer>
        </>
    )
}