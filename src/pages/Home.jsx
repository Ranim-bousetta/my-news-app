import Slider from "../components/Slider.jsx";
import Spinner from "../components/Spinner.jsx";
import NewsCard from "../components/NewsCard.jsx";
import useNews from "../hooks/useNews.js";

export default function Home() {
  const { news, loading } = useNews("", "us");
  const sliderNews = news?.slice(0, 3) || [];

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Slider sliderNews={sliderNews} />

      {loading && (
        <div className="grid place-items-center h-screen">
          <Spinner />
        </div>
      )}

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-4 items-start dark:bg-gray-900 dark:text-white">
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
