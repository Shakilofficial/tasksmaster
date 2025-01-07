import { navItems } from "@/types";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md dark:shadow-none bg-violet-500">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <Logo />
        <nav className="flex items-center space-x-6 justify-center flex-grow">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive ? "text-popover" : "text-defult"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
