import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Header = (props)=>{

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><NavLink to="/"><span className="nav-link">Welcome</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/counter"><span className="nav-link">Counter</span></NavLink></li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </div>

    );
};

export default withRouter(Header);