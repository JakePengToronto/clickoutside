import React from "react";
import Text from "./Text";
import OutsideClickHandler from "./OutsideClickHandler";
import "./styles.css";

export default function App() {
  return (
    <div id="app">
      <OutsideClickHandler
        onOutsideClick={() => {
          console.log("clicked outside!");
        }}
      >
        <Text />
      </OutsideClickHandler>
    </div>
  );
}
