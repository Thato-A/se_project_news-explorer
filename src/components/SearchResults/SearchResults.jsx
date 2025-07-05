import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./SearchResults.css";

function SearchResults({
  articles,
  isLoading,
  hasSearched,
  error,
  visibleCards,
  onShowMore,
  isLoggedIn,
}) {
  if (!hasSearched) {
    return;
  }

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <section className="search__results">
        <p className="search__result-error">{error}</p>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="search__results">
        <p className="search__results-notfound">Nothing Found</p>
      </section>
    );
  }

  const articlesToShow = articles.slice(0, visibleCards);
  const hasMoreArticles = visibleCards < articles.length;

  console.log(articlesToShow);

  return (
    <div className="search__results">
      <h2 className="search__results-title">Search Results</h2>
      <ul className="search__results-cards">
        {articlesToShow.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
      {hasMoreArticles && (
        <button className="search__results-btn" onClick={onShowMore}>
          Show more
        </button>
      )}
    </div>
  );
}

export default SearchResults;
