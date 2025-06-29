import "./NewsCard.css";
import Bookmark from "../../assets/bookmark.svg";
import NatureImage from "../../assets/nature-image.png";
function NewsCard() {
  return (
    <li className="card">
      <img src={NatureImage} alt="card image" className="card__image" />
      <img src={Bookmark} alt="Like button" className="card__like-btn" />
      <div className="card__content">
        <p className="card__date">Date</p>
        <h4 className="card__title">Title</h4>
        <p className="card__info">asdfasdfasdfasdfasdfasdf</p>
      </div>
    </li>
  );
}

export default NewsCard;
