import { useLocation } from "react-router-dom";
import { Search, Filter } from "lucide-react";

import Spinner from "../components/Spinner";
import NewsCard from "../components/NewsCard";
import useNews from "../hooks/useNews";
export default function Categories() {
  const { state } = useLocation();
  const { news, loading, filter, setFilter, handleSubmit } = useNews(
    state.category
  );

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="text-center text-2xl font-bold text-gray-700 pt-10 dark:text-gray-300"
      >
        <label className="flex items-center justify-center text-lg font-medium text-gray-700 mb-3 gap-2">
          <Filter className="w-5 h-5 text-gray-700" />
          Filter Country
        </label>
        <div className="flex items-center justify-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
            <input
              type="text"
              placeholder="ex:us,tr,jp,mx.."
              className="pl-10 pr-4 py-3 w-64 h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-32 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Country
          </button>
        </div>
      </form>
      {loading && (
        <div className="grid place-items-center h-screen">
          <Spinner />
        </div>
      )}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-4 items-start dark:bg-gray-900 dark:text-white">
        {news.length > 0 ? (
          news.map((item, index) => <NewsCard key={index} {...item} />)
        ) : (
          <h1 className="text-center col-span-full text-xl font-semibold">
            No news for this country
          </h1>
        )}
      </div>
    </div>
  );
}
