import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { auth } from "./api/firebase";
import { signInWithPopup } from "firebase/auth";
import { provider } from "./api/firebase";

import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const Layout = () => {
    return (
      <div>
        <Nav user={user} />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);
      setLoggedIn(true);
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      await auth.onAuthStateChanged((user) => {
        if (user) {
          setLoggedIn(true);
          setUser(user);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      });
    };

    checkLoginStatus();
  }, []);

  return (
    <div className="app">
      <Routes>
        {loggedIn ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        ) : (
          <Route
            path="/"
            element={<LoginPage handleLogin={handleGoogleLogin} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
