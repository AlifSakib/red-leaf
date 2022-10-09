import React, { useContext } from "react";
import { NewsContext } from "../Layout/Root";

const News = () => {
  const news = useContext(NewsContext);
  const highlightNews = news.articles;
  const highLight1 = highlightNews[25];
  const highLight2 = highlightNews[10];
  const highLight3 = highlightNews[28];

  return (
    <div className="grid lg:grid-cols-12 mx-4 space-x-3">
      <div className="space-y-4 col-span-7 ">
        <div className="rounded-lg  bg-slate-100  shadow-sm md:flex h-[500px] md:h-96">
          <div className="md:w-2/4 p-2">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={highLight1.urlToImage}
              alt=""
            />
          </div>
          <div className="mx-6 mt-5 text-start md:w-2/4 overflow-hidden">
            <div className=" space-y-2">
              <p className="bg-violet-400 py-1 px-3 rounded-full w-fit">News</p>
            </div>
            <div className="mt-5">
              <p>{highLight1.title.slice(0, 50)}</p>
            </div>
            <div className="mt-5 text-sm">
              <p>{highLight1.description.slice(0, 120)}</p>
            </div>
            <div className="mt-5 italic font-bold ">
              <p>{highLight1.author}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-slate-100 shadow-sm md:flex h-fit md:h-96">
          <div className="md:w-2/4 p-2">
            <img
              className="h-full md:w-full object-cover rounded-lg"
              src={highLight2.urlToImage}
              alt=""
            />
          </div>
          <div className="mx-6 mt-5 text-start md:w-2/4 overflow-hidden">
            <div className=" space-y-2">
              <p className="bg-slate-400 py-1 px-3 rounded-full w-fit">News</p>
            </div>
            <div className="mt-5">
              <p>{highLight2.title.slice(0, 50)}</p>
            </div>
            <div className="mt-5 text-sm">
              <p>{highLight2.description.slice(0, 120)}</p>
            </div>
            <div className="mt-5 italic font-bold ">
              <p>{highLight2.author}</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 hidden lg:block">
        <div className="rounded-lg h-full bg-slate-100 ">
          <div className="w-full p-2">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={highLight3.urlToImage}
              alt=""
            />
          </div>
          <div className="mx-6 mt-5 text-start w-2/4 overflow-hidden">
            <div className=" space-y-2">
              <p className="bg-amber-400 py-1 px-3 rounded-full w-fit">News</p>
            </div>
            <div className="mt-5">
              <p>{highLight3.title.slice(0, 50)}</p>
            </div>
            <div className="mt-5 text-sm">
              <p>{highLight3.description.slice(0, 220)}</p>
            </div>
            <div className="mt-5 italic font-bold ">
              <p>{highLight3.author}</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
