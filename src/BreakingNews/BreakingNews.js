import React from "react";
import { Link } from "react-router-dom";

const BreakingNews = ({ news }) => {
  const { author, title, urlToImage, publishedAt, url } = news;
  const date = new Date(publishedAt);
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 lg:py-20">
      <Link to="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl brightness-25">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={urlToImage}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-50 lg:h-1/2 md:h-2/3 ">
            <p className=" text-start md:text-sm font-medium tracking-wide text-white ">
              {title}
            </p>
            <div className="text-white text-start text-xs font-normal mt-6">
              <p>{author}</p>
              <p>{date.toDateString()}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BreakingNews;
