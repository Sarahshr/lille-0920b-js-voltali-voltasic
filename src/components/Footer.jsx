import React from "react";
import styled from "styled-components";

import Music from "./Music";

const Box = styled.div`
  @media screen and (min-width: 501px) {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #1e1e20;
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #1e1e20;
  }
`;

const DeskBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Cgu = styled.a`
  @media screen and (min-width: 500px) {
    color: yellow;
    font-size: 3vh;
    text-decoration: none;
  }
  @media screen and (max-width: 500px) {
    color: yellow;
    font-size: 3vh;
    text-decoration: none;
  }
`;

const Footer = ({ idVideo, idVid }) => {
  return (
    <Box>
      <DeskBox>
        <Cgu href="./cgu.pdf" target="_blank">
          CGU
        </Cgu>
      </DeskBox>
      {idVideo && !idVid && <Music id={idVideo} />}
    </Box>
  );
};

export default Footer;
