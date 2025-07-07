import { generateFakeId } from "./constants";

let currentUser = null;

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

export const register = ({ username, email, password }) => {
  return new Promise((resolve) => {
    currentUser = {
      _id: generateFakeId(),
      username,
      email,
      password,
    };
    resolve({ token: "fake-token" });
  });
};

export const login = ({ email, password }) => {
  return new Promise((resolve) => {
    if (
      currentUser &&
      currentUser.email === email &&
      currentUser.password === password
    ) {
      resolve({ token: "fake-token" });
    } else {
      resolve({ token: "fake-token" });
    }
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
