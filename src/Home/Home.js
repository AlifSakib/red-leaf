import React, { useContext } from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import { NewsContext } from "../Layout/Root";
import News from "../News/News";
import TrendingNews from "../TrendingNews/TrendingNews";

const Home = () => {
  const newsData = useContext(NewsContext);
  const breakingNEws = newsData.articles.slice(0, 3);
  const trendingNews = newsData.articles.slice(4, 10);
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-2xl text-start font-bold border-l-8 pl-4 mt-16">
        <h1>Editor's Pick This Week</h1>
      </div>
      {/* Breaking News  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {breakingNEws.map((news, index) => (
          <BreakingNews key={index} news={news}></BreakingNews>
        ))}
      </div>
      {/* Trendning News */}
      <div>
        <div className="text-2xl text-start font-bold border-l-8 pl-4 my-6">
          <h1>Trending This Week</h1>
        </div>
        <div className="grid lg:grid-cols-3">
          {trendingNews.map((trendNews, index) => (
            <TrendingNews key={index} trendNews={trendNews}></TrendingNews>
          ))}
        </div>
      </div>
      {/* Archive  */}
      <div className=" md:flex mx-4 text-slate-800 rounded-lg justify-center items-center bg-red-500 h-56 px-4 mt-10">
        <div className="w-1/2 text-start md:text-2xl lg:text-4xl">
          <p>
            Get Inspired to Achieve <br />
            <span className="text-white">Enhanced Outcomes.</span>
          </p>
        </div>

        <div className="w-1/2 text-start border-l-4 ">
          <div className="pl-6 space-y-3">
            <p className="text-white">
              “While one person hesitates because he feels inferior, the other
              is busy making mistakes and becoming superior.”
            </p>
            <p className="font-bold italic">Henry C. Link</p>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <News></News>
      </div>
    </div>
  );
};

export default Home;
