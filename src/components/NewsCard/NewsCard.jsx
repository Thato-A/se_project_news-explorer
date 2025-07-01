import "./NewsCard.css";
import Bookmark from "../../assets/bookmark.svg";
import NatureImage from "../../assets/nature-image.png";
import { useState } from "react";

function NewsCard({ articles, isLoggedIn, isSaved, onSave }) {
  const [article, setArticle] = useState({
    publishedAt: "",
    title: "",
    description: "",
    urlToImage: "",
    sourceName: "",
  });
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
        src={article.urlToImage || { NatureImage }}
        alt={article.title}
        className="card__image"
      />
      {isLoggedIn && (
        <button
          className={`card__like ${isSaved ? card__like_active : ""}`}
          onClick={() => onSave && onSave(articles)}
        >
          <img src={Bookmark} alt="Like button" className="card__like-btn" />
        </button>
      )}
      <div className="card__content">
        <p className="card__date">{formatDate(article.publishedAt)}</p>
        <h4 className="card__title">{article.title}</h4>
        <p className="card__info">{article.description}</p>
        <span className="card__source-name">{article.source.name}</span>
      </div>
    </li>
  );
}

export default NewsCard;
