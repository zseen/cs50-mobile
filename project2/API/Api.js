const API_KEY = null


const buildURLWithQuery = (queryString, queryValue) => {
  const url = new URL('http://www.omdbapi.com')
  url.searchParams.set("apikey", API_KEY)
  url.searchParams.set(queryString, queryValue)
  return url
}

const makeAPIrequest = async url => {
  try {
    const response = await fetch(url);
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    return (error);
  }
}

export const findMoviesByQuery = async searchQuery => {
  const url = buildURLWithQuery("s", searchQuery)
  const APIresult = await makeAPIrequest(url)
  if (APIresult){
    return APIresult.Search
  }
};

export const getMovieInfoById = async id => {
  const url = buildURLWithQuery("i", id)
  const movieInfo = await makeAPIrequest(url)
  return movieInfo
};