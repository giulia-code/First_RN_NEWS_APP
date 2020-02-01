const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3de6b50e452446a83ccdaab7516d47f";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}