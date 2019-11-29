import rooms from "../api/rooms";

export const createMate = formValues => async dispatch => {
  const response = await rooms.post("/rooms", formValues);
  dispatch({ type: "CREATE_MATE", payload: response.data });
};
export const fetchMates = () => async dispatch => {
  const response = await rooms.get("/rooms");
  console.log("response", response);
  dispatch({ type: "FETCH_MATES", payload: response.data });
};

export const fetchMate = id => async dispatch => {
  const response = await rooms.get(`/rooms/${id}`);
  dispatch({ type: "FETCH_MATE", payload: response.data });
};
export const deleteMate = id => async dispatch => {
  await rooms.delete(`/rooms/${id}`);
  dispatch({ type: "DELETE_MATE", payload: id });
};
