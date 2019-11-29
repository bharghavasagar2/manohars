import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMate } from "../actions";

class RoomsShow extends Component {
  componentDidMount() {
    this.props.fetchMate(this.props.match.params.id);
  }
  render() {
    const { room } = this.props;
    if (!room) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h1>{room.location}</h1>
        <h2>{room.gender}</h2>
        <h3>$ {room.rent}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    room: state.rooms[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, { fetchMate })(RoomsShow);
