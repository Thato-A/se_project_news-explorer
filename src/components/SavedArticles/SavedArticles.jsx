import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedArticles.css";

function SavedArticles({
  isLoggedIn,
  savedArticles,
  isArticleSaved,
  isSavedPage,
  onDelete,
}) {
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];

  const visibleKeywords = showAllKeywords
    ? uniqueKeywords
    : uniqueKeywords.slice(0, 2);
  const remainingCount = uniqueKeywords.length - 2;

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <div className="articles">
        <p className="articles__paragraph">Saved Articles</p>
        <h3 className="articles__heading">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h3>

        {uniqueKeywords.length > 0 && (
          <p className="articles__keywords">
            By keywords:&nbsp;
            {visibleKeywords.map((word, index) => (
              <strong key={index}>
                {word.charAt(0).toUpperCase() + word.slice(1)}
                {index < visibleKeywords.length - 1 ? ", " : ""}
              </strong>
            ))}
            {uniqueKeywords.length > 2 && (
              <>
                &nbsp;{" "}
                <button
                  className="articles__toggle"
                  onClick={() => setShowAllKeywords(!showAllKeywords)}
                >
                  {showAllKeywords
                    ? "Show fewer"
                    : `and ${remainingCount} other${
                        remainingCount > 1 ? "s" : ""
                      }`}
                </button>
              </>
            )}
          </p>
        )}
      </div>
      <div className="card__list-container">
        <ul
          className={`card__list ${
            savedArticles.length < 3 ? "card__list--left" : ""
          }`}
        >
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              isLoggedIn={isLoggedIn}
              isArticleSaved={isArticleSaved}
              isSavedPage={isSavedPage}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SavedArticles;
