import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4">
      {/* Brand */}
      <Link to="/">
        <img src="/assets/logo.png" alt="logo " className="w-16" />
      </Link>

      {/* Mobile toggle */}
      <button
        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
          <li>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Categories
            </Link>
          </li>
          <li>
            <span className="block px-3 py-2 rounded-md text-gray-400 cursor-not-allowed">
              News
            </span>
          </li>
        </ul>

        {/* Search Form */}

        <form
          onSubmit={handleSubmit}
          className="flex items-center mt-4 lg:mt-0 lg:ml-6"
        >
          <input
            type="search"
            placeholder="Search for news..."
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
