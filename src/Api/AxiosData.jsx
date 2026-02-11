import axios from "axios";

// Create Base URL
const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Get Data
export const getData = () => {
  return api.get("/posts");
};

// Delete Data
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

// Post Data
export const postData = (add) => {
  return api.post("/posts", add);
};

// Update Data
export const upDateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
