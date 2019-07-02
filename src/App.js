import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie ";

class App extends Component {
  // Render : componentWillMount( ) > render( ) > componentDidMount( )
  // Update : componentWillReciveProps( ) > shouldComponentUpdate( ) > componentWillUpdate( ) > render( ) > componentDidUpdate( )

  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Inglorius Bastards",
            poster:
              "https://www.torrentmap.com/data/parsing_img/movie_old/0_B19DPQFb_bf5230d211dd3641378dd4f9095924ec6d2dc5a2.jpg"
          },
          {
            title: "Matrix",
            poster:
              "https://cdn.images.express.co.uk/img/dynamic/36/590x/MATRIX-761666.jpg"
          },
          {
            title: "Christmas of August",
            poster: "https://t1.daumcdn.net/cfile/2679604F525F7D4B20"
          },
          {
            title: "Oldboy",
            poster:
              "https://lefthandhorror.files.wordpress.com/2013/10/oldboy.jpg?w=620"
          },
          {
            title: "Trainspotting",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyTBtrgBlI9WDc4s8OmR2jimz8U-XXAzM1TxtC9J0yqP7QSbU"
          }
        ]
      });
    }, 5000);
  }

  _renderingMoives = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
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
