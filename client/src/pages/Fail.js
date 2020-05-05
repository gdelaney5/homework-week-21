import React from "react";
import Header from "../components/Header";

function Fail() {
  return (
    <div>
      <Header>
        <h1>404 Page Not Found</h1>
        <h2>
          <span role="img" aria-label="Emoji">
            🙄
          </span>
        </h2>
      </Header>
    </div>
  );
}

export default Fail;
