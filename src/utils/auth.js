import { generateFakeId } from "./constants";

export const authorize = (email, password) => {
  return new Promise((resolve) => {
    currentUser = {
      _id: generateFakeId(),
      username: email.split("@")[0],
      email,
      password,
    };

    resolve({ token: "fake-token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    if (token === "fake-token" && currentUser) {
      resolve(currentUser);
    } else {
      resolve(null);
    }
  });
};
