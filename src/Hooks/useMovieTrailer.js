import React, { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    // console.log(json);

    const filterdVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterdVideos.length ? filterdVideos[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    movieVideo();
  });
};

export default useMovieTrailer;
