import React, {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import {useMediaQuery} from "@material-ui/core";
import { Fragment } from "react";

export const Navbar: FC = () => {
    const location = useLocation();
    const mobile = useMediaQuery('(max-width: 750px) ');

    return <div className={"nav"}>
        {
            mobile ? <Fragment>
                    <Link className={location.pathname === '/character' ? "navlink_active_small" : "navlink_small"} to = "/character">Character</Link>
                    <Link className={location.pathname === '/magic' ? "navlink_active_small" : "navlink_small"} to = "/magic">Magic</Link>
                    <Link className={location.pathname === '/survival' ? "navlink_active_small" : "navlink_small"} to = "/survival">Survival</Link>
                    <Link className={location.pathname === '/about' ? "navlink_active_small" : "navlink_small"} to={"/about"}>Impressum</Link>
            </Fragment> :
                <Fragment>
                    <div className={'logo'}></div>
                    <Link className={location.pathname === '/character' ? "navlink_active" : "navlink"} to = "/character">Character</Link>
                    <Link className={location.pathname === '/magic' ? "navlink_active" : "navlink"} to = "/magic">Magic</Link>
                    <Link className={location.pathname === '/survival' ? "navlink_active" : "navlink"} to = "/survival">Survival</Link>
                    <Link className={location.pathname === '/about' ? "navlink_active" : "navlink"} to={"/about"}>Impressum</Link>
                </Fragment>
        }
    </div>
}