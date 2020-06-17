const API_KEY = 'a80984c'

export const findMoviesByQuery = async searchQuery => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`;
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    // if (!responseJson.Search){
    //   throw "No movies found"
    // }
    return responseJson.Search;  
  } catch (error) {
    return (error);
  }
};


export const getMovieInfoById = async id => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return console.log(error);
  }
};