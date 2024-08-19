//dito yung mga di nagbabago like footer, navbar

import {Outlet, Link} from "react-router-dom"

function Layout () {


    return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to="home">Home</Link> 
                </li>
                <li>
                    <Link to="about">About</Link> 
                </li>
            </ul>
        </nav>

        <Outlet></Outlet>
      
      </>
    )
}

export default Layout;