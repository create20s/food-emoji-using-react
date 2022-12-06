import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "🍕": "pizza",
  "🍔": "burger",
  "🍟": "french fries",
  "🌭": "hot dog",
  "🍿": "popcorn",
  "🧂": "salt",
  "🥓": "bacon",
  "🥚": "egg",
  "🍳": "cooking",
  "🧇": "waffle",
  "🥞": "pan cake",
  "🧈": "butter",
  "🍞": "bred",
  "🥐": "croissant",
  "🥨": "pretzel",
  "🥯": "bagel"
};

var emojisWeKnow = Object.keys(emojiObject);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiObject[userInput];
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiObject[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji enterpreter</h1>
      <p>put any emoji related to food</p>
      <input onChange={inputHandler}></input>
      <div>Meaning of your emoji is {meaning}</div>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "1rem 0.5rem",
              fontSize: "1 rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
