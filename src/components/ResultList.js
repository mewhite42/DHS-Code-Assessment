import React from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import ResultBox from "./ResultBox";
import fetchResults from "../functions/fetchResults";
import "../App.css";
const styles = (theme) => ({
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  tableBodyCell: {
    color: "white",
    borderWidth: "5px",
  },
});

const ResultList = ({ fetchResults, imageList, classes, results }) => {
  if (imageList.length !== 0 && results.length === 0) {
    fetchResults(imageList);
  }

  const tableRows = imageList.map((prop, index) => {
    let filteredImageList = imageList.slice();
    filteredImageList.splice(index, 1);

    return (
      <TableRow className="ResultRow" key={prop.Name}>
        <TableCell className={classes.tableBodyCell} align="center">
          <img
            className="SourceImage"
            src={process.env.REACT_APP_S3_URL + prop.Name}
            alt={process.env.REACT_APP_S3_URL + prop.Name}
          />
          <p>{prop.Name}</p>
        </TableCell>
        <TableCell className={classes.tableBodyCell} align="center" colSpan={3}>
          <ResultBox
            sourceImage={prop.Template}
            imageList={filteredImageList}
            results={results[index]}
          />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table className="ResultBox">
      <TableBody className="">{tableRows}</TableBody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    imageList: state.imageList,
    results: state.results,
  };
};

export default connect(mapStateToProps, { fetchResults })(
  withStyles(styles)(ResultList)
);
