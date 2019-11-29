import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMate } from "../actions";
import Modal from "./Modal";

class RoomDelete extends Component {
  render() {
    return <Modal />;
  }
}

export default connect(null, { fetchMate })(RoomDelete);
