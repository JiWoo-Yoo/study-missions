import { Outlet, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  //client id로 로그인 요청
  // const handleLogin = async () => {
  // GitHub 로그인 로직
  // const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  // const REDIRECT_URL = "http://localhost:3000/";
  // const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&${REDIRECT_URL}&scope=user`;

  // window.location.href = GITHUB_LOGIN_URL;
  // };

  // code 받아오기
  // const handleCallback = async () => {
  //   const code = new URLSearchParams(window.location.search).get("code");
  //   if (!code) {
  //     console.error("No code received");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://github.com/login/oauth/access_token",
  //       {
  //         client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  //         client_secret: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  //         code: code,
  //       }
  //     );

  //     const accessToken = response.data.access_token;

  //     setLoggedIn(true);
  //   } catch (error) {
  //     console.error("Error fetching access token:", error);
  //   }
  // };

  return (
    <div className="app">
      <Routes>
        {!loggedIn ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
