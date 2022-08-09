import React, { Component } from 'react';
import movies, {getMovies} from '../services/fakeMovieService';
import Like from './common/like';

class Movies extends Component{
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const filterMovie = m => { // 'm' is a copy of 'movies' array
            console.log(m._id);
            return m._id !== movie._id; // Condition: Return all movies in array 'm' except with 'movie._id'
        }
        const movies = this.state.movies.filter(filterMovie);
        this.setState({movies});
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    render(){
        const {length : count} = this.state.movies;
        if(count === 0){
            return <p>There are no movies in the database.</p>
        }
        else
        return(
        <React.Fragment>
            <p>Showing {count} movies in the database.</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked}
                                  onClick={() => this.handleLike(movie)}  
                        /></td>
                        <td><button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </React.Fragment>
        )   
    }
}
 
export default Movies;