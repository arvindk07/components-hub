import { useState } from "react";
import "./appBarFilter.scss";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const AppFilterSearch = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="appFilterContainer">
      <div className="searchBarContainer">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
};

export default AppFilterSearch;
