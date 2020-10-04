import axios from "axios";

const fetchImageList = () => async (dispatch) => {
  axios.get(process.env.REACT_APP_LAMBDA_URL + "/get-list").then((response) => {
    dispatch({ type: "RESULTSSIZE", payload: 0 });
    dispatch({ type: "IMAGELIST", payload: response.data });
  });
};
export default fetchImageList;
