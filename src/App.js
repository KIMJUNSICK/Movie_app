import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie ";

class App extends Component {
  // Render : componentWillMount( ) > render( ) > componentDidMount( )
  // Update : componentWillReciveProps( ) > shouldComponentUpdate( ) > componentWillUpdate( ) > render( ) > componentDidUpdate( )

  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderingMoives = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.large_cover_image}
          key={movie.id}
          genres={movie.genres}
          summary={movie.summary}
        />
      );
    });
    return movies;
  };

  _callAPI = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=rating&limit=30"
    )
      .then(potato => potato.json())
      .then(tomato => tomato.data.movies)
      .catch(error => console.log(error));
  };

  _getMovies = async () => {
    const movies = await this._callAPI();
    console.log(movies);
    this.setState({
      movies
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderingMoives() : "Loading"}
      </div>
    );
  }
}

export default App;

