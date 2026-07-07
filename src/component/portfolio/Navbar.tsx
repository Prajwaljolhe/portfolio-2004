import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/stack", label: "Stack" },
  { to: "/projects", label: "Projects" },
  
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="logo-text">
        prajwal.devops
      </Link>
      <ul className="menu hidden md:flex">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="hire-btn hidden md:inline-flex">
        Hire Me
      </Link>
    </header>
  );
};

export default Navbar;
