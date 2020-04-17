const API_KEY = 'a80984c'


export const fetchMovies = async response => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${response}`;
    try {
      const response = await fetch(url);
      const { Search } = await response.json();
      return Search;
    } catch (err) {
      return console.log(err);
    }
  };
  
  //fetch ID from omdb api
  export const fetchById = async id => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    try {
      const response = await fetch(url);
      const results = await response.json();
      return results;
    } catch (err) {
      return console.log(err);
    }
  };