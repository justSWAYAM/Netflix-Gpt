import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);
  
  return (
   movies && ( 
   <div className="bg-black">
    <div className="-mt-[18%] relative z-20"> 
      
      <MovieList title = { " Now Playing "} movies = {movies.NowPlayingMovies} />
      <MovieList title = { " Top Rated "} movies = {movies.TopRatedMovies} />
      <MovieList title = { " Popular "} movies = {movies.PopularMovies} />
      <MovieList title = { " Upcoming "} movies = {movies.UpcomingMovies} />
      {/* <MovieList title = { " Horror "} movies = {movies.NowPlayingMovies} /> */}

      {/*
       movie list - poppular
       movie list - trending
       movie list - upcoming etc etc
       movie cards
      
      */}
    </div>
    </div>
    )
  );
};

export default SecondaryContainer