import { useRef } from "react";
  // Import API key from constants
import model from "../utils/openAi";
import { addGptMovieResult } from "../utils/RecommendSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";


const RecommendSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="
      +movie+"&include_adult=false&language=en-US&page=1",options
    );

    const json = await data.json();
    
    return json.results;
  }

  const handleSearch = async () => {
    if (searchText.current) {
      console.log(searchText.current.value);
      const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give 5 movies, comma-separated like the example result given. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";
      
       const result = await model.generateContent(gptQuery);
            const resultMovies = result.response.text().split(",");
            console.log(resultMovies);  // Print the movie titles from GPT output
       
         const promiseArray = resultMovies.map((movie) => searchMovieTMDB(movie));   

         const TMDBresults = await Promise.all(promiseArray);

         
         dispatch(addGptMovieResult({ movieNames : resultMovies ,movieResults :TMDBresults}));
    

    };
  };

  return (
    <div className="pt-[10%] flex justify-center border-black rounded-lg">
      <form
        className=" w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText} // Attach the ref here
          placeholder="Search for movies, series, or people..."
          className="p-4 m-4 col-span-9"
        />
        <button
          className="bg-red-600 text-white col-span-3 m-4 py-2 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default RecommendSearch;
