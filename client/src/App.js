import React from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import natureLogo from "./media/nature.svg";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-brand-container">
            <div>
              <img className="nav-logo" src={natureLogo} alt="" />
            </div>
            <div>
              <h1 className="nav-header">Gratitude Daily</h1>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="container-posts">
          <Posts />
        </div>
        <div className="container-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
