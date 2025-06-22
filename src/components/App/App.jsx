import { useState } from "react";
import Header from "../Header/Header";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
