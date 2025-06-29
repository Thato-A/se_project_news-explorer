import NewsCard from "../NewsCard/NewsCard";
import "./SearchResults.css";

function SearchResults() {
  return (
    <div className="search__results">
      <h2 className="search__results-title">Search Results</h2>
      <ul>
        <NewsCard />
      </ul>
      <button className="search__results-btn">Show more</button>
    </div>
  );
}

export default SearchResults;
