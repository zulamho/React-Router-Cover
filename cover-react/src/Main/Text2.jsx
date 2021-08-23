import React from "react";
import { Route, useHistory } from "react-router-dom";
function Text2() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <h1 className="cover-heading">Cover your page.</h1>
      <p className="lead">
        Cover is a one-page template for building simple and beautiful home
        pages.
      </p>
      <p className="lead">
        <button className="clickLearm" onClick={handleClick}>
          Learn more
        </button>
      </p>
    </div>
  );
}
export default Text2;
