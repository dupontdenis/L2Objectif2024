import { showContent } from "./src/content.mjs";

document
  .getElementById("paragraphForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const numParagraphs = document.getElementById("numParagraphs").value;
    showContent(parseInt(numParagraphs, 10)); // Call showContent with the input value
  });

showContent();
