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
  

export const getMoviesById = async id => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${id}`;
  try {
    const response = await fetch(url);
    const { Search } = await response.json();
    return Search;
  } catch (err) {
    return console.log(err);
  }
};