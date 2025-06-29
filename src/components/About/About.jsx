import AuthorImage from "../../assets/Author-image.jpeg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <img src={AuthorImage} alt="Author's image" className="about__image" />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph"></p>
      </div>
    </div>
  );
}

export default About;
