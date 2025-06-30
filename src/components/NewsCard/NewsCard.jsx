import "./NewsCard.css";
import Bookmark from "../../assets/bookmark.svg";
import NatureImage from "../../assets/nature-image.png";

function NewsCard({ articles, isLoggedIn }) {
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
        src={articles.urlImage || { NatureImage }}
        alt={articles.title}
        className="card__image"
      />
      <img src={Bookmark} alt="Like button" className="card__like-btn" />
      <div className="card__content">
        <p className="card__date">{formatDate(articles.publisedAt)}</p>
        <h4 className="card__title">{articles.title}</h4>
        <p className="card__info">{articles.description}</p>
        <span className="card__source-name">{articles.source.name}</span>
      </div>
    </li>
  );
}

export default NewsCard;
