import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

function Main({
  isLoggedIn,
  articles,
  isLoading,
  setIsLoading,
  savedArticles,
  setSavedArticles,
  isArticleSaved,
  hasSearched,
  onSave,
  error,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <>
      <SearchResults
        articles={articles}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        hasSearched={hasSearched}
        savedArticles={savedArticles}
        setSavedArticles={setSavedArticles}
        isArticleSaved={isArticleSaved}
        onSave={onSave}
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
