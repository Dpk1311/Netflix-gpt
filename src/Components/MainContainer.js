import React from "react";
import VideosBackground from "./VideosBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(!movies) return

    const mainmovie = movies[0]
    console.log(mainmovie);
    const {original_title, overview,id} = mainmovie
  return (
    <div>
      <VideoTitle  title={original_title} overview={overview}/>
      <VideosBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
