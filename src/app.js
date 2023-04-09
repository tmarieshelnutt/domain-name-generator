/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = [
    "I",
    "we",
    "you",
    "he",
    "she",
    "it",
    "they",
    "my",
    "our",
    "your",
    "her",
    "his",
    "their"
  ];

  const adj = [
    "aggressive",
    "agreeable",
    "ambitious",
    "brave",
    "calm",
    "delightful",
    "eager",
    "faithful"
  ];

  const noun = [
    "cloud",
    "beaver",
    "water",
    "bottle",
    "woman",
    "child",
    "brother",
    "monkey",
    "lion",
    "girl",
    "dude"
  ];

  const allWords = [pronoun, adj, noun];

  function generateDomainName() {
    let domainName = "";
    for (let i = 0; i < allWords.length; i++) {
      let randomIndex = Math.floor(Math.random() * allWords[i].length);
      domainName += allWords[i][randomIndex];
    }
    return domainName + ".com";
  }
  for (let i = 0; i < 10; i++) {
    console.log(generateDomainName());
  }
  document.getElementById("theDomain").innerText = generateDomainName();
};
