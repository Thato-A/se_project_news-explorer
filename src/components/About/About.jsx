import AuthorImage from "../../assets/Author-image.jpeg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <img src={AuthorImage} alt="Author's image" className="about__image" />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hi! My name is Lily Thato Anderson. I'm an aspiring software engineer
          with a growing passion for backend development. As a student, I've
          been focused on building websites and learning the fundamentals of how
          software works behind the scenes.
          <br />
          <br />
          My time at TripleTen has given me not only technical skills, but also
          the confidence to keep pushing forward and improving every day. I'm
          excited to continue growing, take on new challenges, and add real
          value to the companies I work with in the future. I'm driven by the
          goal of contributing meaningfully to my future team and employer
          bringing dedication, curiosity, and a mindset geared toward impact
        </p>
      </div>
    </div>
  );
}

export default About;
