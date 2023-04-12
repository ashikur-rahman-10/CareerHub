import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/statistics"}>Statistics</Link>
            <Link to={"/apliedJobs"}>Applied Jobs</Link>
            <Link to={"/blog"}>Blogs</Link>
        </div>
    );
};

export default Navbar;
