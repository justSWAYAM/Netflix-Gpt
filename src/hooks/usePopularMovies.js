
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  
    
        const dispatch =  useDispatch();
        const GetPopularMovies = async () => {
      
          const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options);
          
          const json = await data.json();
      
          
          
          dispatch(addPopularMovies(json.results)); //
           
        }
      
           useEffect(() => {
           GetPopularMovies();
          },[]);
};

export default usePopularMovies;