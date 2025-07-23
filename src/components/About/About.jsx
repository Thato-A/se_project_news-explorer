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
          with a growing passion for backend development. Through my time at
          TripleTen, I've built confidence in my coding skills and gained
          hands-on experience with modern web technologies. <br /> <br /> I have
          a solid understanding of HTML, CSS, and JavaScript, and I'm
          comfortable working with React and Node.js to build full-stack
          applications. While I'm still growing in these areas, I've developed
          real projects that connect to MongoDB databases, used tools like
          Postman for API testing, and written unit tests using Jest.
          <br />
          <br />I enjoy creating responsive websites that adapt to all screen
          sizes and I'm excited to continue growing, take on new challenges, and
          add real value to the companies I work with in the future. I'm driven
          by the goal of contributing meaningfully to my future team by bringing
          dedication, curiosity, and a mindset geared toward impact.
        </p>
      </div>
    </div>
  );
}

export default About;
