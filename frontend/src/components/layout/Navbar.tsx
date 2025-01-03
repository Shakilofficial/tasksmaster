import { ThemeToggle } from "../ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Logo />
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
