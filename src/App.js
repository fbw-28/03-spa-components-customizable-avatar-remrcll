import React from "react";
import Avatar from "./Avatar";

function App() {
  return (
    <div className="App">
      {/* Importing Avatar.js here:  */}
      <Avatar size="s" type="square" />
      <Avatar size="s" type="rounded" />
      <Avatar size="s" type="circle" />
      <Avatar size="m" type="square" />
      <Avatar size="m" type="rounded" />
      <Avatar size="m" type="circle" />
      <Avatar size="l" type="square" />
      <Avatar size="l" type="rounded" />
      <Avatar size="l" type="circle" />
    </div>
  );
}

export default App;
