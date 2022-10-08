import React, { useContext } from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import { NewsContext } from "../Layout/Root";
import TrendingNews from "../TrendingNews/TrendingNews";

const Home = () => {
  const newsData = useContext(NewsContext);
  const breakingNEws = newsData.articles.slice(0, 3);
  const trendingNews = newsData.articles.slice(4, 10);
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-2xl text-start font-bold border-l-8 pl-4">
        <h1>Editor's Pick This Week</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {breakingNEws.map((news, index) => (
          <BreakingNews key={index} news={news}></BreakingNews>
        ))}
      </div>
      <div>
        <div className="text-2xl text-start font-bold border-l-8 pl-4 my-6">
          <h1>Trending This Week</h1>
        </div>
        <div className="grid grid-cols-3">
          {trendingNews.map((trendNews, index) => (
            <TrendingNews key={index} trendNews={trendNews}></TrendingNews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
