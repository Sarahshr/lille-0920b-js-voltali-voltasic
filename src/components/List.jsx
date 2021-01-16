import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./List.css";

import { getYoutube } from "../api/youtubeApiCall";

const MainDiv = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 95.8%;
  flex-wrap: wrap;
  padding-bottom: 10%;
`;

const H1 = styled.h1`
  background-color: black;
  color: white;
  width: 50%;
  text-align: start;

  @media screen and (max-width: 500px) {
    padding-top: 15%;
  }
  @media screen and (min-width: 501px) {
    background-color: black;
    padding-top: 10%;
  }
  @media (max-width: 800px) {
    width: 90%;
    font-size: 18pt;
  }
`;

const Paragraph = styled.p`
  background-color: black;
  color: white;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 650px) {
    width: 70%;
    text-align: center;
  }
`;

const MusicItem = styled.div`
  background-color: black;
  margin-left: 15%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: yellow;
  background: none;
  width: 70%;
  cursor: pointer;
  :hover {
    background-color: #1e1e20;
    ${Paragraph} {
      background-color: #1e1e20;
    }
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 90%;
    justify-content: flex-end;
    padding-right: 0%;
    margin-left: 5%;
    padding-bottom: 8%;
  }
  @media (max-width: 650px) {
    width: 90%;
    flex-direction: column;
    padding-right: 0%;
    margin-left: 5%;
  }
`;

const IMG = styled.img`
  margin-top: 1%;
  :hover {
  }
`;

const List = ({ changeVideo, setIdVid }) => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const handleSearch = async (inputValue) => {
    const myData = await getYoutube(inputValue);
    setItems(myData.items);
  };

  useEffect(() => {
    if (location.state.query) {
      handleSearch(location.state.query);
    }
  }, [location.state.query]);

  const regex = /&amp;/gi;
  const clip = /clip officiel/gi;
  const apo = /&#39;/gi;

  const play = (item) => {
    changeVideo(item);
    setIdVid(false);
  };

  return (
    <MainDiv>
      <H1>Résultats pour {location.state.query}</H1>
      {items.map((item) => (
        <MusicItem onClick={() => play(item)} key={item.id.videoId}>
          <IMG
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <Paragraph>
            {item.snippet.title
              .replace(regex, "&")
              .replace(clip, " ")
              .replace(apo, "'")
              .replace(/\(|\)/g, "")
              .replace(/\[|\]/g, "")}
          </Paragraph>
        </MusicItem>
      ))}
    </MainDiv>
  );
};
export default List;
