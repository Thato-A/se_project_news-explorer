export const APIkey = "ba2672b01274410e97e1db4f5eaa4605";

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export function generateFakeId() {
  return Math.random().toString(36).slice(2, 10);
}

export const base =
  process.env.NODE_ENV === "production" ? "/se_project_news-explorer/" : "/";
