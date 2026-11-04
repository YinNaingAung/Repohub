import { NavLink } from "react-router";
import "../../assets/css/cus.css"
import { useState } from "react";
const Nav = (props)=> {
    const [open, setOpen] = useState(false)
    const menu = () => {
        setOpen(!open)
    }
    return(
        
        <div className="">
            
            <nav className="navbar z-1000 bg-body-tertiary fixed-top">
                <div className="container  ">
                    <a className="navbar-brand" href="#">RepoHub</a>
                        <button className={`${open?'opened':''} menu `} onClick={menu} aria-label="Main Menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                        </button>
                    
                
                </div>
            </nav>



            <div className="  offcanvas offcanvas-top  h-50" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="container offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasTopLabel">RepoHub</h5> */}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                </div>
                <div className="container offcanvas-body mt-4  ">
                    <ul className="list-group list-group-horizontal-xxl ">
                        <li className="list-group-item border-0"><NavLink to="/" className={({ isActive }) => (isActive ? "text-danger text-decoration-none" : " text-decoration-none")}>Home</NavLink></li>
                        <li className="list-group-item border-0"><NavLink to="/service" className={({ isActive }) => (isActive ? "text-danger text-decoration-none" : "text-decoration-none")}>Service</NavLink></li>
                        <li className="list-group-item border-0"><NavLink to="/story" className={({ isActive }) => (isActive ? "text-danger text-decoration-none" : "text-decoration-none")}>Story</NavLink></li>
                        <li className="list-group-item border-0"><NavLink to="/contact" className={({ isActive }) => (isActive ? "text-danger text-decoration-none" : "text-decoration-none")}>Contact</NavLink></li> 
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Nav;