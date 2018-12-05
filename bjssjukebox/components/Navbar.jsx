import React from "react";
import Link from "next/link";

const Navbar = props => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand">
        <img className="bjss-logo" src="static/BJSS-870x460-white.png"/>
      </p>
      <ul className="navbar-nav">
        {props.navs.map(link => (
          <Link className="nav-item" href={link.url} key={link.url}>
            <li className="nav-link" key={link.title}>
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
