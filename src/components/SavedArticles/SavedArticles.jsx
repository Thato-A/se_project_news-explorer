import NewsCard from "../NewsCard/NewsCard";
import "./SavedArticles.css";

function SavedArticles() {
  return (
    <>
      <div className="articles">
        <p className="articles__paragraph">Saved Articles</p>
        <h3 className="articles__heading">Lily, you have 5 saved articles</h3>
        <p className="articles__keywords">By keywords</p>
      </div>
      <div className="card__list-container">
        <ul className="card__list">
          <NewsCard />
        </ul>
      </div>
    </>
  );
}

export default SavedArticles;
