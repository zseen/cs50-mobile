const API_KEY = 

// const URL_PLAIN = new URL('http://www.omdbapi.com')
// URL_PLAIN.searchParams.set("apikey", API_KEY)
// console.log("beginning URL:", URL_PLAIN)


// let url = new URL('http://www.omdbapi.com')
// url.searchParams.set("apikey", API_KEY)


const buildURLWithQuery = (queryString, queryValue) => {
  const url = new URL('http://www.omdbapi.com')
  url.searchParams.set("apikey", API_KEY)
  url.searchParams.set(queryString, queryValue)
  return url
}


export const findMoviesByQuery = async searchQuery => {
  const url = buildURLWithQuery("s", searchQuery)
  console.log(url)
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.Search;  
  } catch (error) {
    return (error);
  }
};


// export const findMoviesByQuery = async searchQuery => {
//   const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`;
//   try {
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     return responseJson.Search;  
//   } catch (error) {
//     return (error);
//   }
// };


export const getMovieInfoById = async id => {
  const url = buildURLWithQuery("i", id)
  console.log(url)
  
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return console.log(error);
  }
};