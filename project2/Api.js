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
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(response => response.json())
    .then((responseJson) => {
      
    return responseJson  
    })
    .catch(error=>console.log(error)) 
    };