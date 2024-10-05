import { IMG } from "../utils/constants"

const MovieCard = ({PosterPath}) => {

  if(!PosterPath) return null;
  return (
    <div className="w-36 pr-2 mx-3">
     <img alt="Movie Card" src= {IMG + PosterPath} />
    </div>
  )
}

export default MovieCard;