import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Categories from "../pages/Categories.jsx";
export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seaarch" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
