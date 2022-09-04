import React from "react";
import { Link } from "react-router-dom";

const NavbarSticky = () => {
    return (
        <div className="sticky bottom-0">
            <Link to="/">Home</Link>
            <Link to="1">satu</Link>
        </div>
    )
}

export default NavbarSticky;