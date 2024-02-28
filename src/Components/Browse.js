import React from "react";
import Header from "./Header";
import useGetNowMovies from "../Hooks/useGetNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";

const Browse = () => {
  useGetNowMovies();
  usePopularMovies();
  useTopRated();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
