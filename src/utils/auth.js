import { generateFakeId } from "./constants";

let currentUser = null;

const TEST_USER = {
  _id: generateFakeId(),
  username: "Liam",
  email: "liam@mail.com",
  password: "L1234567",
};

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
  return new Promise((resolve, reject) => {
    if (email === TEST_USER.email && password === TEST_USER.password) {
      resolve({ token: "fake-token", user: TEST_USER });
    } else if (
      currentUser &&
      currentUser.email === email &&
      currentUser.password === password
    ) {
      resolve({ token: "fake-token" });
    } else {
      reject({ message: "Invalid credentials" });
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
