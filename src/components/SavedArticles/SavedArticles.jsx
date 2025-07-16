import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedArticles.css";

function SavedArticles({
  isLoggedIn,
  savedArticles,
  isArticleSaved,
  isSavedPage,
  onDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <div className="articles">
        <p className="articles__paragraph">Saved Articles</p>
        <h3 className="articles__heading">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h3>
        <p className="articles__keywords">By keywords:{savedArticles.source}</p>
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
