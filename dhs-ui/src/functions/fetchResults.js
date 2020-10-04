import axios from "axios";

const fetchResults = (imageList) => async (dispatch) => {
  let templateList = [];
  imageList.forEach((element) => {
    templateList.push(element.Template);
  });

  dispatch({ type: "RESULTSSIZE", payload: templateList.length });

  templateList.forEach((element, index) => {
    let filteredList = templateList.slice();
    filteredList.splice(index, 1);

    axios
      .post(process.env.REACT_APP_LAMBDA_URL + "/compare-list", {
        SingleTemplate: templateList[index],
        TemplateList: filteredList,
      })
      .then((response) => {
        dispatch({ type: "RESULTS", index: index, payload: response.data });
      });
  });
};
export default fetchResults;
