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
            {visibleKeywords.join(", ")}
            {uniqueKeywords.length > 2 && !showAllKeywords && (
              <>
                &nbsp;and{" "}
                <button
                  className="articles__toggle"
                  onClick={() => setShowAllKeywords(true)}
                >
                  {remainingCount} other{remainingCount > 1 ? "s" : ""}
                </button>
              </>
            )}
          </p>
        )}
      </div>
      <div className="card__list-container">
        <ul className="card__list">
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
