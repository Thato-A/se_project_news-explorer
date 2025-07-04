import "./NewsCard.css";
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
        src={articles.urlToImage}
        alt={articles.title}
        className="card__image"
      />
      {isLoggedIn && (
        <button
          className={`card__like-btn ${isSaved ? "card__like-btn_active" : ""}`}
          onClick={() => onSave && onSave(articles)}
        ></button>
      )}
      {!isLoggedIn && (
        <button className="card__tooltip">Sign in to save articles</button>
      )}
      <div className="card__content">
        <p className="card__date">{formatDate(articles.publishedAt)}</p>{" "}
        <h4 className="card__title">{articles.title}</h4>
        <p className="card__info">{articles.description}</p>
        <p className="card__source-name">{articles.sourceName}</p>
      </div>
    </li>
  );
}

export default NewsCard;
