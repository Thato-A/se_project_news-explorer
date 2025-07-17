import { useState, useEffect, useRef } from "react";
import "./NewsCard.css";

function NewsCard({
  article,
  isLoggedIn,
  isArticleSaved,
  onSave,
  isSavedPage,
  onDelete,
}) {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTitleTruncated, setIsTitleTruncated] = useState(false);
  const [isDescTruncated, setIsDescTruncated] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };
  const isSaved = isArticleSaved(article);

  const handleSave = () => {
    if (isSaved) return;
    onSave(article);
  };

  const handleDelete = () => {
    if (!isSaved) return;
    onDelete(article);
  };

  useEffect(() => {
    const checkOverflow = (el) => el && el.scrollHeight > el.clientHeight;

    requestAnimationFrame(() => {
      setIsTitleTruncated(checkOverflow(titleRef.current));
      setIsDescTruncated(checkOverflow(descRef.current));
    });
  }, [article.title, article.description, isExpanded]);

  useEffect(() => {
    if (isTitleTruncated || isDescTruncated) setShowButton(true);
  }, [isDescTruncated, isTitleTruncated]);

  return (
    <li className="card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="card__image"
      />

      <div className="card__buttons">
        {isSavedPage ? (
          <button
            className="card__like-btn card__like-btn_delete"
            onClick={handleDelete}
          ></button>
        ) : (
          <button
            className={`card__like-btn ${
              isSaved ? "card__like-btn_active" : ""
            }`}
            onClick={handleSave}
          ></button>
        )}

        {!isLoggedIn ? (
          <div className="card__tooltip">Sign in to save article</div>
        ) : isSavedPage ? (
          <div className="card__tooltip">Remove article</div>
        ) : null}
      </div>

      <div className="card__content">
        <p className="card__date">{formatDate(article.publishedAt)}</p>

        <h4
          ref={titleRef}
          className={`card__title ${isExpanded ? "card__title--expanded" : ""}`}
        >
          {article.title}
        </h4>

        <p
          ref={descRef}
          className={`card__info ${isExpanded ? "card__info--expanded" : ""}`}
        >
          {article.description}
        </p>

        {showButton && (
          <button
            className="card__read-more"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}

        <p className="card__source-name">{article.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
