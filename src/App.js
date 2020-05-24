import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./styles.css";

const App = () => {
  const [search, setSearch] = useState("Fellowship");
  const [query, setQuery] = useState();
  const [request, setRequest] = useState();

  useEffect(() => {
    // By moving this function inside the effect, we can clearly see the values it uses.
    async function fetchProduct() {
      const response = await fetch(exampleReq);
      setRequest(await response.json());
      console.log(request.Title);
    }

    fetchProduct();
  }, [query]);

  const changeSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const onSearch = (e) => {
    setQuery(search);
    setSearch("");
  };

  const exampleReq = `https://www.omdbapi.com/?t=${search}&apikey=a3e5499d`;
  return (
    <div className="App">
      <h1>Hello</h1>
      <form className="search-form" onSubmit={onSearch}>
        <input
          className="search-bar"
          type="text"
          onChange={changeSearch}
          value={search}
        />
        <button className="search-button" type="submit">
          submit
        </button>
      </form>
      <Movie
        title={request.Title}
        year={request.Year}
        genre={request.Genre}
        rating={request.imdbRating}
      />
    </div>
  );
};
export default App;
