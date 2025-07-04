import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

function Main({ isLoggedIn, articles, isLoading, hasSearched, error }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <>
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
