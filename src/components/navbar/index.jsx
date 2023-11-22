import { NavLink } from "react-router-dom";
import { links } from "../../data";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="nav">
      <div className={`${toggle ? "nav_menu show-menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map((val) => {
            const { id, icon, path, name } = val;
            return (
              <li key={id} className="nav_item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav_link active-nav" : "nav_link"
                  }
                >
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${toggle ? "nav_toggle animate-toggle" : "nav_toggle"}`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
export default Navbar;
