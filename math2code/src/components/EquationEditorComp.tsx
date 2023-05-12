import { Error } from "@mui/icons-material";
import { Box, Paper, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";

import styles from "@/styles/Equation.module.css";
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();
type EditorProps = {
  onChange: (arg0: MathField) => void;
  latex: string;
  error: string;
};
const ErrorIconComp = (props: {error: string}) => { 
  let error = props.error;
  if (error == undefined || error == "") {
    return <></>;
  }
  return ( 
    <Box sx={{
      lineHeight: 0,
      marginRight:"5px"
    }}>
    <Tooltip title={error}>
      <Error color="error"/>
      </Tooltip>
      </Box>
  );
}
const EditableMathExample = (props: EditorProps) => {
  return (
    <Paper>
      <Box sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
      <EditableMathField latex={props.latex} onChange={props.onChange} className={styles.mathquill} />
      <ErrorIconComp error={props.error} />
      </Box>
    </Paper>
  );
};
export default EditableMathExample;
