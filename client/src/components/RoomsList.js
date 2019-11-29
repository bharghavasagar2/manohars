import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMates } from "../actions";

class RoomsList extends Component {
  componentDidMount() {
    this.props.fetchMates();
  }
  renderRooms = () => {
    return this.props.rooms.map(room => {
      return (
        <div className="ui card">
          <div className="content">
            <div className="header">{room.gender}</div>
            <div className="meta">2 days ago</div>
            <div className="description">
              <p>{room["required members"]}</p>
              <p>
                Many people also have their own barometers for what makes a cute
                dog.
              </p>
            </div>
          </div>
          <div className="extra content">
            <i className="check icon"></i>
            121 Votes
          </div>
        </div>
      );
    });
  };

  render() {
    console.log("this.props", this.props);
    return <div>{this.renderRooms()}</div>;
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return { rooms: Object.values(state.rooms) };
};

export default connect(mapStateToProps, { fetchMates })(RoomsList);
