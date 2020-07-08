import { fireRequest } from "./fireRequest";

export const postRegister = (form) => {
  return fireRequest("register", [], form);
};
export const postLogin = (form) => {
  return fireRequest("login", [], form);
};

export const postdetails = (form) => {
  return fireRequest("postproducts", [], form);
};

export const getdetails = (form) => {
  return fireRequest("getproducts", [], form);
};

export const search = (id) => {
  return fireRequest("search", [id]);
};

export const deleteNote = (form) => {
  return fireRequest("deleteNote", [], form);
};
