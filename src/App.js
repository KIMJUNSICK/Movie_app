import React from "react";
import "./App.css";
import Movie from "./Movie ";

const movieTitles = [
  "Inglorius Bastards",
  "Matrix",
  "Christmas of August",
  "Oldboy"
];

const movieImg = [
  "https://upload.wikimedia.org/wikipedia/ko/4/4f/%EB%B0%94%EC%8A%A4%ED%84%B0%EC%A6%88_%EA%B1%B0%EC%B9%9C_%EB%85%80%EC%84%9D%EB%93%A4.jpg",
  "https://cdn.images.express.co.uk/img/dynamic/36/590x/MATRIX-761666.jpg",
  "https://t1.daumcdn.net/cfile/2679604F525F7D4B20",
  "https://lefthandhorror.files.wordpress.com/2013/10/oldboy.jpg?w=620"
];

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImg[0]} />
      <Movie title={movieTitles[1]} poster={movieImg[1]} />
      <Movie title={movieTitles[2]} poster={movieImg[2]} />
      <Movie title={movieTitles[3]} poster={movieImg[3]} />
    </div>
  );
}

export default App;
