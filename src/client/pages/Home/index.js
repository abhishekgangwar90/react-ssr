import React from "react";

function Home(props) {
  console.log(props)
  const onClick = () => {
    props.history.push('/userList')
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
