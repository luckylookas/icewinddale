import React, {FC} from "react";
import {Link, useLocation} from "react-router-dom";

export const Navbar: FC = () => {
    const location = useLocation();

    return <div className={"nav"}>
        <Link className={location.pathname === '/about' ? "navlink_active" : "navlink"} to={"/about"}>Impressum</Link>
        <Link className={location.pathname === '/character' ? "navlink_active" : "navlink"} to = "/character">Character</Link>
        <Link className={location.pathname === '/magic' ? "navlink_active" : "navlink"} to = "/magic">Magic</Link>
    </div>
}