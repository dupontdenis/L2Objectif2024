import { fetchContent } from "./dataFetcher.mjs";
import { updateContent } from "./domManipulator.mjs";

/**
 * Fetches and displays content in the form of a list.
 * @param {number} nbParas - The number of paragraphs to fetch and display.
 */
export async function showContent(nbParas = 2) {
  console.log(`Showing ${nbParas} paragraphs`);

  try {
    const content = await fetchContent(nbParas);
    updateContent(content);
  } catch (e) {
    console.log("Error", e);
  }
}
