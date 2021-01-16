import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  padding-left: 1%;
  padding-right: 1%;
  background-color: black;
  padding-bottom: 7%;
  @media (max-width: 800px) {
    padding-bottom: 15%;
  }
`;

export const Title = styled.h2`
  font-size: 25pt;
  color: white;
  background-color: black;
`;

export const SongTitles = styled.p`
  color: grey;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0);
  top: 45%;
`;

export const SongTitle = styled.p`
  color: grey;
  font-size: 12pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: black;
  background-color: rgba(255, 255, 255, 0);
  top: 45%;
`;

export const Img = styled.img`
  width: 150px;
  clip-path: ellipse(50% 50%);
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    ${SongTitles} {
      visibility: visible;
      opacity: 1;
    }
    ${Image} {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 700px) and (max-width: 800px) {
    margin-right: 8%;
  }
`;

export const RouterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
