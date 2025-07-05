import NewsCard from "../NewsCard/NewsCard";
import { saveArticle } from "../../utils/api";
import "./SavedArticles.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedArticles({
  articles,
  isLoggedIn,
  savedArticles,
  setSavedArticles,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      return;
    }
    return saveArticle(article)
      .then((res) => {
        if (res.ok) {
          setSavedArticles((prev) => [...prev, article]);
        }
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
          {currentUser.username}, you have {articles.length} saved articles
        </h3>
        <p className="articles__keywords">
          By keywords: {articles.source.name}
        </p>
      </div>
      <div className="card__list-container">
        <ul className="card__list">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              isLoggedIn={isLoggedIn}
              onSave={handleSaveArticle}
              isSaved={isArticleSaved}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SavedArticles;
