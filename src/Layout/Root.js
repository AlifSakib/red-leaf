import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const NewsContext = createContext();
const Root = () => {
  const news = useLoaderData();
  return (
    <div>
      <NewsContext.Provider value={news}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </NewsContext.Provider>
    </div>
  );
};

export default Root;
