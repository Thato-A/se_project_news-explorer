import { newsApiBaseUrl } from "./constants";
import { APIkey } from "./constants";

async function fetchNews(keyword) {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const params = new URLSearchParams({
    q: keyword,
    apiKey: APIkey,
    from: formatDate(sevenDaysAgo),
    to: formatDate(today),
    pageSize: 100,
  });

  const url = `${newsApiBaseUrl}?${params}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Could not get results");
  }
  return res.json();
}

async function fetchNewsWithKeyword(keyword) {
  try {
    const data = await fetchNews(keyword);
    return data.articles.map((article) => ({
      ...article,
      keyword,
    }));
  } catch (error) {
    console.error("fetchNewsWithKeyword error:", error);
    return [];
  }
}

function saveArticle(article) {
  // API call to save articles
  return request(`${newsApiBaseUrl}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
}

export { fetchNews, fetchNewsWithKeyword, saveArticle };
