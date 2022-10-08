import React from "react";

const TrendingNews = ({ trendNews }) => {
  const { author, title, urlToImage, publishedAt, url } = trendNews;
  const date = new Date(publishedAt);
  return (
    <div className="  m-4 border-l-4 border-indigo-300 relative h-[500px]">
      <div className="">
        <img
          className="rounded-r-lg h-72 w-full object-cover"
          src={urlToImage}
          alt=""
        />
      </div>
      <div className="text-start overflow-hidden text-sm mx-4 mt-4 space-y-8">
        <div className=" space-y-2">
          <p className="bg-red-400 py-1 text-white px-3 rounded-full">
            Trending . . .
          </p>
          <p>{title.slice(0, 30)}</p>
        </div>
        <div className="">
          <p>{author}</p>
          <p>{date.toDateString()}</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <button className="w-full bg-violet-500 mt-3 rounded-r-full hover:bg-green-500 transition-colors ease-out text-white ">
          Read More.
        </button>
      </div>
    </div>
  );
};

export default TrendingNews;
