import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import fetchImageList from "../functions/fetchImageList";
import "../App.css";

const ButtonHeader = ({ fetchImageList }) => {
  return (
    <div className="ButtonHeader">
      <Button variant="contained" color="primary" onClick={fetchImageList}>
        Compare Images
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageList: state.imageList,
  };
};

export default connect(mapStateToProps, { fetchImageList })(ButtonHeader);
