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
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          summary={movie.summary}
        />
      );
    });
    return movies;
  };

  _callAPI = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
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
    return (
      <div className="App">
        {this.state.movies ? this._renderingMoives() : "Loading"}
      </div>
    );
  }
}

export default App;
