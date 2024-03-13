import React from "react";

export default function Nav() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "1px 1px 1px gray",
        }}
      >
        <div style={{ fontSize: "30px", fontStyle: "bold" }}>Shop</div>
        <div>
          <button>장바구니</button>
          <button>프로필</button>
          <button>나가기</button>
        </div>
      </nav>
    </div>
  );
}
