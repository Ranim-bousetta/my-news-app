import { useEffect, useState } from "react";
import Slider from "../components/Slider.jsx";
import Spinner from "../components/Spinner.jsx";
import NewsCard from "../components/NewsCard.jsx";
import axios from "axios";
export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  const sliderNews = news?.splice(0, 3);
  return (
    <div className="">
      <Slider sliderNews={sliderNews}></Slider>

      {loading && (
        <div className="grid place-items-center h-screen ">
          {" "}
          <Spinner />{" "}
        </div>
      )}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
