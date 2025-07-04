export const APIkey = "ba2672b01274410e97e1db4f5eaa4605";

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export function generateMongoId() {
  const hex = "0123456789abcdef";
  let id = "";
  for (let i = 0; i < 24; i++) {
    id += hex[Math.floor(Math.random() * 16)];
  }
  return id;
}
