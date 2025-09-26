import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
import Spinner from "../components/Spinner.jsx";
export default function Search() {
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setNews(data.articles || []);
      } catch (err) {
        console.log(err);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [url]);
  console.log(news);
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1 className="text-center text-2xl font-bold text-gray-700 pt-10 dark:text-gray-300">
        News About:{" "}
        <span className="text-2xl font-bold text-blue-700">
          {state.toUpperCase()}
        </span>
      </h1>
      {loading ? (
        <div className="grid place-items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
          {!news && (
            <h1 className="text-center text-2xl font-bold text-gray-700 mt-20">
              The searched word did not match
            </h1>
          )}
          {news &&
            news.map((item, index) => <NewsCard key={index} {...item} />)}
        </div>
      )}
    </div>
  );
}
