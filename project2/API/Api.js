const API_KEY = null
const omdbApiUrlString = 'http://www.omdbapi.com'


const buildURLWithQuery = (queryStringKey, queryStringValue) => {
  const url = new URL(omdbApiUrlString)
  url.searchParams.set("apikey", API_KEY)
  url.searchParams.set(queryStringKey, queryStringValue)
  return url
};

const getUrlWithSearchQuery = queryString => {
  return buildURLWithQuery("s", queryString)
};

const getUrlWithMovieId = id => {
  return buildURLWithQuery("i", id)
};

const makeApiRequest = async url => {
  const response = await fetch(url);
  const responseJson = await response.json()
  return responseJson
};

export const findMoviesByQuery = async searchQuery => {
  const url = getUrlWithSearchQuery(searchQuery)
  try {
    const ApiResult = await makeApiRequest(url)
    return ApiResult.Search
  } catch (error) {
    return error
  }
};

export const getMovieInfoById = async id => {
  const url = getUrlWithMovieId(id)
  try {
    const movieInfo = await makeApiRequest(url)
    return movieInfo
  } catch (error) {
    return error
  }
};