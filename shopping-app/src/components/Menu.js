import React from "react";
import styled from "styled-components";

export default function Menu() {
  return (
    <div>
      <Button>모두</Button>
      <Button>전자기기</Button>
      <Button>쥬얼리</Button>
      <Button>남성의류</Button>
      <Button>여성의류</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: gray;
  font-size: 20px;
  padding: 10px 20px;
  margin: 20px;
`;
