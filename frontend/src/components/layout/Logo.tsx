import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/src/assets/logo.png" alt="Logo" className="h-6" />
      <span className="text-lg font-semibold">TaskMaster</span>
    </Link>
  );
};

export default Logo;
