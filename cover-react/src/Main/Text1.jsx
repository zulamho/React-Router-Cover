import React from "react";
import { Route, useHistory } from "react-router-dom";
function Text1() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/text2");
  };
  return (
    <div>
      <h1 className="cover-heading">Cover your page.</h1>
      <p className="lead">
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
      <p className="lead">
        <button className="clickLearm" onClick={handleClick}>
          Learn more
        </button>
      </p>
    </div>
  );
}
export default Text1;
