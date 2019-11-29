import _ from "lodash";

export default (state = {}, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case "FETCH_MATES":
      return _.mapKeys(action.payload, "id");
    case "CREATE_MATE":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_MATE":
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case "DELETE_MATE":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
