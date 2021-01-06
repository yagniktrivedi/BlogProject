import jsonPlc from "../apis/jsonPlc";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlc.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  //make api call and get data
  const response = await jsonPlc.get(`/users/${id}`);
  //dispatch action
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/* function syntext 
export const fetchPosts = async () => {
  const response = await jsonPlc.get("/posts");
  return async function (dispatch, getState) {
    const response = await jsonPlc.get("/posts");
  };

  dispatch({ type: "FETCH_POSTS", payload: response });
};

*/
