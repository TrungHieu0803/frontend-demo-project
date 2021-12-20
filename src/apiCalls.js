import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  var result;
  try {
    const res = await axios.post("http://localhost:3000/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    return {mess: 'success'}
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE" });
    return {mess: 'error'}
  }
};

