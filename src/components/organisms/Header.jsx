import React from "react";

//Media Assets
import logoLight from "../../assets/images/logo-light.svg";

export default function Header() {
    return (<header className="header">
       <a href="#">
           <img src={logoLight} alt="Logo" />
       </a>

       <div className="search-bar">
           <input placeholder="Search"/>
            <a to="/search-page">Search</a>
       </div>
    </header>
    );
}