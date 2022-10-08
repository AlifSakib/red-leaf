import React, { useContext } from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import { NewsContext } from "../Layout/Root";

const Home = () => {
  const newsData = useContext(NewsContext);
  const breakingNEws = newsData.articles.slice(0, 3);
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
    </div>
  );
};

export default Home;
