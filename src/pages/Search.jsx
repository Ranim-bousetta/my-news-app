import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
export default function Search() {
  const [news, setNews] = useState("");
  const { state } = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [url]);
  console.log(news);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-gray-700 mt-10">
        News About:{" "}
        <span className="text-2xl font-bold text-blue-700">
          {state.toUpperCase()}
        </span>
      </h1>
      <div className="container mx-auto px-4 py-8">
        {!news && (
          <h1 className="text-center text-2xl font-bold text-gray-700 mt-20">
            The searched word did not match
          </h1>
        )}
        {news && news.map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
    </div>
  );
}
