import React, { Component } from "react";
import RoomsList from "./RoomsList";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <Link to="/rooms/new" className="active item">
              Add a new Roommate
            </Link>
            <a className="item">Ask us</a>
          </div>
        </div>
        <div className="twelve wide stretched column">
          <div to="/" className="ui segment">
            <RoomsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
