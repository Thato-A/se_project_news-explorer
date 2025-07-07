import NewsCard from "../NewsCard/NewsCard";
import { saveArticle } from "../../utils/api";
import "./SavedArticles.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedArticles({ isLoggedIn, savedArticles, setSavedArticles }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) return;

    if (isArticleSaved(article)) return;

    return saveArticle(article)
      .then((savedArticle) => {
        setSavedArticles((prev) => [...prev, savedArticle]);
      })
      .catch((err) => {
        console.error("Failed to save article:", err);
      });
  };

  return (
    <>
      <div className="articles">
        <p className="articles__paragraph">Saved Articles</p>
        <h3 className="articles__heading">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h3>
        <p className="articles__keywords">By keywords:</p>
      </div>
      <div className="card__list-container">
        <ul className="card__list">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              isLoggedIn={isLoggedIn}
              onSave={handleSaveArticle}
              isSaved={isArticleSaved(article)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SavedArticles;
