import React, { useState, useEffect } from "react";

const CustomAlert = ({ keyword, keywordState }) => {
  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (keyword === "add") {
      setMessage("추가되었습니다.");
      setBackgroundColor("green");
    } else if (keyword === "delete") {
      setMessage("삭제되었습니다.");
      setBackgroundColor("red");
    } else if (keyword === "modified") {
      setMessage("수정되었습니다.");
      setBackgroundColor("salmon");
    }

    const notificationTimeout = setTimeout(() => {
      setMessage("");
      setBackgroundColor("");
      keywordState("");
    }, 3000);

    return () => clearTimeout(notificationTimeout);
  }, [keyword]);

  return (
    <div
      style={{
        display: message ? "block" : "none",
        backgroundColor: backgroundColor,
        padding: "10px",
        borderRadius: "5px",
        position: "fixed",
        left: "40%",
        top: "10px",

        zIndex: "999",
        fontSize: "30px",
        color: "white",
      }}
    >
      {message}
    </div>
  );
};

export default CustomAlert;
