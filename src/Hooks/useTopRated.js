import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopMovies } from "../utils/MovieSlice";


const useTopRated =()=>{
    const dispatch = useDispatch();
    const getTopMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_Options
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopMovies(json.results));
    };
    useEffect(() => {
        getTopMovies();
    });
}

export default useTopRated;