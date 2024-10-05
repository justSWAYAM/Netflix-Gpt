export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG = "https://image.tmdb.org/t/p/w500/";

  export const OPEN_AI = process.env.REACT_APP_OPENAI_KEY;

 