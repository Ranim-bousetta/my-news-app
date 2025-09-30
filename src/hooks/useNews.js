import { useContext, useEffect, useState } from "react";
import axios from "axios";

const useNews = (
  initialCategory = "",
  initialCountry = "us",
  initialQuery = ""
) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);
  const [query, setQuery] = useState(initialQuery);
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apiKey=${apiKey}`;
  const queryUrl = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;
  const fetchNews = async (fetchUrl) => {
    setLoading(true);
    try {
      const { data } = await axios(fetchUrl);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filter.trim()) {
      fetchNews(filterUrl);
      setFilter("");
    }
  };

  useEffect(() => {
    if (query) {
      fetchNews(queryUrl);
    } else {
      fetchNews(url);
    }
  }, [url, queryUrl]);
  useEffect(() => {
    setCategory(initialCategory);
    setCountry(initialCountry);
    setQuery(initialQuery);
  }, [initialCategory, initialCountry, initialQuery]);
  return {
    news,
    loading,
    filter,
    setFilter,
    setCountry,
    country,
    category,
    setCategory,
    handleSubmit,
  };
};
export default useNews;
