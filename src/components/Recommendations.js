
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Recommendations = () => {
  const  { movieResults , movieNames} =  useSelector((store) => store.recommend);
     
    if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-40 text-white">
        <div >
         
         {movieNames.map((movieName,index) => (<MovieList key="" title={movieName}
          movies = {movieResults[index]}/> )) }
        </div>
    </div>
    
  )
}

export default Recommendations