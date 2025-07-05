import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSaved, onSave }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <li className="card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="card__image"
      />

      <button
        className={`card__like-btn ${isSaved ? "card__like-btn_active" : ""}`}
        onClick={() => onSave && onSave(article)}
      ></button>

      {!isLoggedIn && (
        <button className="card__tooltip">Sign in to save article</button>
      )}
      <div className="card__content">
        <p className="card__date">{formatDate(article.publishedAt)}</p>{" "}
        <h4 className="card__title">{article.title}</h4>
        <p className="card__info">{article.description}</p>
        <p className="card__source-name">{article.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
