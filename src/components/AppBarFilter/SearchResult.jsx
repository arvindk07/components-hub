const SearchResult = ({ result }) => {
  return (
    <div
      className="searchResult"
      onClick={(e) =>
        alert(`You are Clicked on ${result.name}
  `)
      }
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
