import { Outlet, NavLink } from "react-router-dom"
export function LayoutRoot(){
    const navinfo = [
        {
            TO: "/",
            DisplayName: "HOME"
        },
        {
            TO: "/article/",
            DisplayName: "ARTICLE"
        }
    ]
    return (
        <>
            <header>
                <nav>
                    <ul>
                        {
                            navinfo.map((info)=>{
                                return(
                                    <li>
                                        <NavLink
                                        to={info.TO}
                                        > {info.DisplayName}
                                        </NavLink>
                                    </li>
                                )                                
                            })
                        }                        
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