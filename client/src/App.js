import React from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import joyBanner from "./media/nature.svg";

const App = () => {
  return (
    <div>
      <h1>Gratitude Daily</h1>
      <img src={joyBanner} alt="" />
      <Form />
      <Posts />
    </div>
  );
};

export default App;
