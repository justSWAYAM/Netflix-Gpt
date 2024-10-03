
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  
    
        const dispatch =  useDispatch();
        const GetNowPlayingMovies = async () => {
      
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options);
          
          const json = await data.json();
      
          
          
          dispatch(addNowPlayingMovies(json.results)); //
           
        }
      
           useEffect(() => {
           GetNowPlayingMovies();
          },[]);
};

export default useNowPlayingMovies;