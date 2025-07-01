import { useState } from "react";
import { fetchNews, saveArticle } from "../../utils/api";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

function Main({ isLoggedIn, articles }) {
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const handleSearch = (searchQuery) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);

    try {
      const data = fetchNews(searchQuery);

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <SearchResults
        articles={articles}
        isLoading={isLoading}
        hasSearched={hasSearched}
        error={error}
        visibleCards={visibleCards}
        onShowMore={handleShowMore}
        isLoggedIn={isLoggedIn}
      />

      <About />
    </>
  );
}

export default Main;
