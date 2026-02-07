import axios from "axios";

const api=axios.create({
    baseURL: "http://localhost:3001"
});

export const getData = () => {
  return api.get("/posts");
};


export const deleteData=(id)=>
{
  return api.delete(`/posts/${id}`)
};
