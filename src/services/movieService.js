import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

function movieUrl(id){
  return `${apiEndpoint}/${id}`;
}

export function getMovies(){
    return http.get(apiEndpoint);
}

export function getMovie(movieId){
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie){
  // Update movie
  if(movie._id){
    const body = {...movie}; // Cloning object to avoid directly modifying the original state of movie object
    delete body._id; // REST API does not allow id property in body of the request
    return http.put(movieUrl(movie._id), body);    
  }
  // Add movie
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId){
  return http.delete(movieUrl(movieId));
}