import React from "react";

function Home() {
  const onClick = () => {
    alert("Hello javascript works");
  };

  return (
    <div>
      <div>Hello this is React loaded Home Component</div>
      <button type="button" onClick={onClick}>
        clickMe
      </button>
    </div>
  );
}

export default Home;
