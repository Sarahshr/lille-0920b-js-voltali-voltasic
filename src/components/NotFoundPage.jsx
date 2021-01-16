import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ErrorPage = styled.div`
  height: 100%;
  color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 8%;
`;

const ButtonReturnHome = styled.button`
  border-radius: 15px;
  height: 4vh;
  width: 8vw;
  background: yellow;
  transition: 0.5s all ease-out;
  border: none;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    text-shadow: 1px 0 0 0 black;
    transition: 0.5s all ease-out;
  }
`;

const ErrorSmiley = styled.p`
  font-size: 7em;
`;
const ErrorMessage = styled.p`
  font-size: 3em;
`;
const ErrorH1 = styled.h1`
  font-size: 7em;
`;
const NotFoundPage = () => {
  return (
    <ErrorPage>
      <ErrorH1>ERROR 404</ErrorH1>
      <ErrorMessage>PAGE NOT FOUND</ErrorMessage>
      <ErrorSmiley>¯\_(ツ)_/¯</ErrorSmiley>
      <Link to="/">
        <ButtonReturnHome>Return Home</ButtonReturnHome>
      </Link>
    </ErrorPage>
  );
};

export default NotFoundPage;
