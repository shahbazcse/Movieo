import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import SearchBox from './searchBox';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const filterMovie = (m) => {
      // 'm' is a copy of 'movies' array
      // console.log(m._id);
      return m._id !== movie._id; // Condition: Return all movies in array 'm' except with 'movie._id'
    };
    const movies = this.state.movies.filter(filterMovie);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  
  handleSearch = (query) => {
    this.setState({searchQuery: query, selectedGenre: null, currentPage: 1});
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if(searchQuery){
      filtered = allMovies.filter(m => (
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      ));
    }
    else if(selectedGenre && selectedGenre._id){
      filtered =  allMovies.filter((m) => m.genre._id === selectedGenre._id);
    }
      

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const { totalCount, data: movies } = this.getPageData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <Link to="/movies/new">
              <button
                type="button"
                id="add-movie"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
                Add Movie
              </button>
            </Link>
            <p>Showing {totalCount} movies in the database.</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              sortColumn={sortColumn}
              movies={movies}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
