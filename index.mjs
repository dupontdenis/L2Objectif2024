import { showContent } from "./src/content.mjs";

// Define an async function to handle the form submission
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  const numParagraphs = document.getElementById("numParagraphs").value;
  try {
    await showContent(parseInt(numParagraphs, 10)); // Await the async function
    console.log("Content displayed successfully.");
  } catch (error) {
    console.error("Failed to display content:", error);
  }
}

// Add event listener to the form
document
  .getElementById("paragraphForm")
  .addEventListener("submit", handleFormSubmit);

// Call showContent on page load using top-level await
try {
  await showContent();
  console.log("Initial content displayed successfully.");
} catch (error) {
  console.error("Failed to display initial content:", error);
}
