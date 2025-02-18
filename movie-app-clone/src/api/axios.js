import axios from "axios";

// axios는 인스턴스를 생성하여 url을 재사용.
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
