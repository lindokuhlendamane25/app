import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  root: {

    width: "100%",

    overflowX: "auto"

  },

  table: {

    minWidth: 650

  }

});


function SyllabusDevelopment(props) {
  const classes = useStyles();
  console.log(
    `SyllabusDevelopment TODO: Turn these props into something useful: ${JSON.stringify(
      props
    )}`
  );
  return (
    <React.Fragment>
      TODO. Draw something pretty. Press F12 to see the logs
      <h1 align = "center">Syllabus</h1>
    </React.Fragment>
  );
}

export default SyllabusDevelopment;
