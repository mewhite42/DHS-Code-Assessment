import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import "../App.css";

const styles = (theme) => ({
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  tableBodyCell: {
    color: "white",
  },
});

const ResultBox = (props) => {
  let templateList = [];
  let _imageList = props.imageList;
  let _results = props.results || [];

  props.imageList.forEach((element) => {
    templateList.push(element.Template);
  });

  const tableRows = _imageList.map((prop, index) => {
    return (
      <TableRow className="ResultRow" key={prop.Name}>
        <TableCell className={props.classes.tableBodyCell} align="center">
          <img
            className="TargetImage"
            src={process.env.REACT_APP_S3_URL + prop.Name}
            alt={process.env.REACT_APP_S3_URL + prop.Name}
          />
        </TableCell>
        <TableCell className={props.classes.tableBodyCell} align="center">
          {prop.Name}
        </TableCell>
        <TableCell className={props.classes.tableBodyCell} align="center">
          {_results[index]}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table className="ResultBox">
      <TableHead>
        <TableRow>
          <TableCell className={props.classes.tableHeadCell} align="center">
            Comparison Image
          </TableCell>
          <TableCell className={props.classes.tableHeadCell} align="center">
            Image Name
          </TableCell>
          <TableCell className={props.classes.tableHeadCell} align="center">
            Similarity Value
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="">{tableRows}</TableBody>
    </Table>
  );
};

export default withStyles(styles)(ResultBox);
