const API_KEY = 'a80984c'


export const findMoviesByQuery = async response => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${response}`;
    try {
      const response = await fetch(url);
      const { Search } = await response.json();
      return Search;
    } catch (error) {
      return console.log(error);
    }
  };
  

export const getMovieInfoById = async id => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  try {
    const response = await fetch(url);
    const resultsJson = await response.json();
    return resultsJson;
  } catch (error) {
    return console.log(error);
  }
};