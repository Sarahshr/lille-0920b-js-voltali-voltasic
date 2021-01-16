import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./Music.css";
const Music = ({ id }) => {
  const inputRange = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [display, setDisplay] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleVolume = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleToggleLoop = () => {
    setLoop(!loop);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const SongTitle = styled.h1`
    font-size: 15pt;
    color: white;
    margin-right: -15vw;
    min-width: 45%;
    @media screen and (max-width: 450px) {
      font-size: 10pt;
      margin-bottom: 1vh;
    }
  `;
  const I = styled.i`
    color: white;
    cursor: pointer;
  `;

  const IChevron = styled.i`
    color: white;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      display: none;
    }
  `;

  const Ino = styled.i`
    color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  `;

  const Button = styled.button`
    border: 1px solid yellow;
    border-radius: 10px;
    background-color: #1e1e20;
    width: 15vw;
    height: 5vh;
    :hover {
      background-color: yellow;
      ${I} {
        color: #1e1e20;
      }
    }
    @media screen and (max-width: 500px) {
      width: 30vw;
      height: 5vh;
      margin-left: 5vw;
    }
  `;
  const LabelLoop = styled.label`
    font-size: 2vh;
    margin-left: 15%;
    font-size: 3vh;
  `;

  const LabelVolume = styled.label`
    font-size: 4vh;
    margin-left: 18%;
    @media screen and (max-width: 800px) {
      display: none;
    }
  `;
  const Volume = styled.input`
    height: 3vh;
    margin-left: 3%;
    @media screen and (max-width: 800px) {
      display: none;
    }
  `;

  const AjustButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10%;
    width: 50vw;
    @media screen and (max-width: 450px) {
      justify-content: space-around;
      width: 100%;
    }
  `;

  const Checkbox = styled.input`
    visibility: hidden;
  `;

  const regex = /&amp;/gi;
  const clip = /clip officiel/gi;
  const apo = /&#39;/gi;

  return (
    <div className="lecteur">
      {!display && (
        <SongTitle>
          {id.snippet.title
            .replace(regex, "&")
            .replace(clip, " ")
            .replace(apo, "'")
            .replace(/\(|\)/g, "")
            .replace(/\[|\]/g, "")}
        </SongTitle>
      )}

      <ReactPlayer
        ref={inputRange}
        url={`https://www.youtube.com/watch?v=${id.id.videoId} `}
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        volume={volume}
        playing={playing}
        loop={loop}
        onProgress={handleProgress}
        height={display ? "10vh" : "0px"}
      />
      <AjustButton>
        <Button className="play_button" onClick={handlePlayPause}>
          {playing ? (
            <I className="fas fa-pause"></I>
          ) : (
            <I className="fas fa-play"></I>
          )}
        </Button>
        <LabelLoop htmlFor="loop">
          {loop ? (
            <I className="fas fa-undo"></I>
          ) : (
            <Ino className="fas fa-undo"></Ino>
          )}
        </LabelLoop>
        <Checkbox
          id="loop"
          type="checkbox"
          checked={loop}
          onChange={handleToggleLoop}
        />
        <LabelVolume htmlFor="volume">
          <I className="fas fa-volume-up"></I>
        </LabelVolume>
        <Volume
          type="range"
          min={0}
          max={1}
          value={volume}
          step="any"
          onChange={handleVolume}
        />
        <IChevron
          className={display ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          onClick={handleDisplay}
        ></IChevron>
      </AjustButton>
    </div>
  );
};

export default Music;
