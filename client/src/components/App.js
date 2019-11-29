import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AddRoomate from "./AddRoomate";
import LoginPage from "./LoginPage";
import Aboutus from "./Aboutus";
import RoomShow from "./RoomsShow";
import RoomDelete from "./RoomDelete";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/rooms/new" exact component={AddRoomate} />
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/rooms/about" exact component={Aboutus} />
          <Route path="/rooms/delete/:id" exact component={RoomDelete} />
          <Route path="/rooms/:id" exact component={RoomShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
