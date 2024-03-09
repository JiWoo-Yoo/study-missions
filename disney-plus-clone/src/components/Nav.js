import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className="nav">
      <img
        alt="Disney+ logo"
        src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
        className="nav__logo"
        onClick={() => window.location.reload()}
        style={{ cursor: "pointer" }}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />

      <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className="nav__avatar"
      />
    </nav>
  );
}
