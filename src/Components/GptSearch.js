import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LoginBackgroundImgURL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="h-screen w-screen object-cover" src={LoginBackgroundImgURL} alt="background-img" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
