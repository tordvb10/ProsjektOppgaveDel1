import { Outlet, NavLink } from "react-router-dom"
export function LayoutRoot(){
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
            <header>
                <nav>
                    <h2>conduit</h2>
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