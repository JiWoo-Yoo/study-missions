import { Outlet, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

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

  const handleLogin = () => {
    // GitHub 로그인 로직

    // 로그인 후 loggedIn 상태를 true로 설정
    setLoggedIn(true);
  };
  return (
    <div className="app">
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
