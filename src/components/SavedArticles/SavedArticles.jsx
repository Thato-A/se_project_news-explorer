import NewsCard from "../NewsCard/NewsCard";
import { saveArticle } from "../../utils/api";
import "./SavedArticles.css";

function SavedArticles({
  articles,
  isLoggedIn,
  savedArticles,
  setSavedArticles,
}) {
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
        <h3 className="articles__heading">Lily, you have 5 saved articles</h3>
        <p className="articles__keywords">By keywords</p>
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
