import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 hover:text-red-400 ${
      isActive ? "text-red-500 font-bold" : "text-white"
    }`;

  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <NavLink to="/" className="text-2xl font-bold">
        Rick <span className="text-red-500">Morty</span>
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/characters" className={navLinkStyle}>
          Characters
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;