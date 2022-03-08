import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDZhZDM1YzUyZDk2OWQ5ZTI5OTJmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjYzMzIwNywiZXhwIjoxNjQ2ODkyNDA3fQ.NrVzG9n4gOhN5ZqhRgVTMrQ9xTBQBCc2uSd40BIQO64"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
})