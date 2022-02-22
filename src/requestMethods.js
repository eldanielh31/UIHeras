import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDZhZDM1YzUyZDk2OWQ5ZTI5OTJmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE1OTc2MywiZXhwIjoxNjQ1NDE4OTYzfQ.SrG6Jw-Js24hgvnLE1J5ERaWN80MTxzXi-iCd48hsjs"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})