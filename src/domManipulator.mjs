/**
 * Updates the DOM to display the content.
 * @param {Array<string>} content - An array of paragraphs to display.
 */
export function updateContent(content) {
  // Remove the existing ul element if it exists
  const existingUl = document.querySelector("ul");
  if (existingUl) {
    existingUl.remove();
  }

  // Create a new ul element and append content
  let ul = document.createElement("ul");

  content.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });

  document.getElementsByTagName("body")[0].appendChild(ul);
}
