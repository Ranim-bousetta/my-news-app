import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Search() {
  const [news, setNews] = useState("");
  const { state } = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;
  console.log(state);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-gray-700 mt-10">
        News About: <span>{}</span>
      </h1>
    </div>
  );
}
