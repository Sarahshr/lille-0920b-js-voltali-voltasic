import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/homepage/Home";
import Nav from "./components/Nav";
import List from "./components/List";
import Playlist from "./components/artists/Playlist";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";

const App = () => {
  const [idVideo, setIdVideo] = useState();
  const [idVid, setIdVid] = useState();

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home changeVideo={setIdVideo} setIdVid={setIdVid} />}
        />
        <Route
          exact
          path="/List"
          render={() => <List changeVideo={setIdVideo} setIdVid={setIdVid} />}
        />
        <Route
          path="/playlist/:id"
          render={() => <Playlist changeVideo={setIdVid} />}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer idVideo={idVideo} idVid={idVid} />
    </div>
  );
};
export default App;
