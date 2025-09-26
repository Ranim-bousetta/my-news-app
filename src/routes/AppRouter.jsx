import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Categories from "../pages/Categories.jsx";
import Navbar from "../components/Navbar.jsx";
import ThemeToggleDropdown from "../components/ThemeToggleDropdown.jsx";
export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <ThemeToggleDropdown />
      </BrowserRouter>
    </div>
  );
}
