import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <Logo>Disney</Logo>
      </Wrap>
      <Wrap>
        <Logo>Pixar</Logo>
      </Wrap>
      <Wrap>
        <Logo>Marble</Logo>
      </Wrap>
      <Wrap>
        <Logo>Starwars</Logo>
      </Wrap>
      <Wrap>
        <Logo>National Geographic</Logo>
      </Wrap>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  text-align: center;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid gray;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: aliceblue;
  }
`;

const Logo = styled.div`
  font-size: 50px;
  color: white;
  font-weight: bold;
`;
