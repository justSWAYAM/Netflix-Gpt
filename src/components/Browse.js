
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import Recommend from './Recommend';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  const showRecommendations = useSelector(store => store.recommend.showRecommendations);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
     {showRecommendations ? ( <Recommend/>
     ) :
     ( <>
      <MainContainer/>
      <SecondaryContainer/>
     </>
     )}
     
    </div>
  )
}
export default Browse;