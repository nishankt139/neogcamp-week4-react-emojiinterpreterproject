import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy Face",
  "🙃": "Sarcasm",
  "😌": "Pleased",
  "😞": "Sad",
  "❤️": "Red Heart",
  "😛": "Cheeky"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    //console.log(meaning);
    setMeaning(meaning);

    if (meaning === undefined) {
      meaning = "Not defined";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>emoji's you know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
