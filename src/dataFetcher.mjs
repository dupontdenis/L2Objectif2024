/**
 * Fetches content from the server.
 * @param {number} nbParas - The number of paragraphs to fetch.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of paragraphs.
 */
export async function fetchContent(nbParas) {
  try {
    console.log(`Fetching ${nbParas} paragraphs from the server...`);
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${nbParas}&start-with-lorem=1`
    );
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
}
