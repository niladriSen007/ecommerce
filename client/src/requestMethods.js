import axios from "axios";

const BASE_URL = "http://localhost:4000/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODI0NTQyODMzN2ZmZmRiZWU5MGYxMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk3MTUzMzMsImV4cCI6MTY2OTk3NDUzM30.dvhhzEOKNpCK3NbQOk1-EOWvNFW6NyrsQ-JHDLdvvFw`

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});