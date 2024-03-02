import React from "react";
import Header from "./Header";
import useGetNowMovies from "../Hooks/useGetNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptview = useSelector((store) => store.gpt.gptToggle);
  useGetNowMovies();
  usePopularMovies();
  useTopRated();

  return (
    <div>
      <Header />
      {gptview ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
