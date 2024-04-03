import { Outlet,NavLink } from "react-router-dom"
export function LayoutRoot(){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Navlink
                            to="/"
                            >
                            </Navlink>
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