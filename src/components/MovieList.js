import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    
  return (
    <div className=" px-5 py-2 text-white  ">
      <h1 className="text-3xl pl-3 py-2">{title}</h1>
    <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black">
      
      <div className="flex ">

        {movies?.map((movie) => (
          <MovieCard key={movie.id} PosterPath={movie.poster_path} />
        ))}
        {/* {movies.map(movie => <MovieCard key={movie.id} PosterPath={movie.poster_path} />)} */}
        
      </div>

    </div>
    </div>
  )
}

export default MovieList