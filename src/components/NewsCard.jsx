import random from "/assets/random.jpg";
export default function NewsCard({ title, url, urlToImage, content }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        src={urlToImage ? urlToImage : random}
        className="w-full h-48 object-cover rounded-t-lg"
        alt="News Image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-gray-700">{content}</p>
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Detail
        </a>
      </div>
    </div>
  );
}
