import { Error } from "@mui/icons-material";
import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";

import styles from "@/styles/Equation.module.css";
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();
type EditorProps = {
  onChange: (arg0: MathField) => void;
  mathquillDidMount: (arg0: MathField) => void;
  latex: string;
  error: string;
  resetField: () => void;
};
const ErrorIconComp = (props: { error: string }) => {
  let error = props.error;
  if (error == undefined || error == "") {
    return <></>;
  }
  return (
    <Box
      sx={{
        lineHeight: 0,
        marginRight: "5px",
      }}
    >
      <Tooltip title={error}>
        <Error color="error" />
      </Tooltip>
    </Box>
  );
};
const EditableMathExample = (props: EditorProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5">Equation</Typography>
      <EditableMathField
        latex={props.latex}
        onChange={props.onChange}
        className={styles.mathquill}
        mathquillDidMount={props.mathquillDidMount}
        config={{
          autoCommands: "pi theta sqrt nthroot",
        }}
      />
      <ErrorIconComp error={props.error} />
      <Button
      sx={{ marginLeft: "5px",
      }}
        variant="contained"
        onClick={() => {
          props.resetField();
        }}
      >
        Reset
      </Button>
    </Box>
  );
};
export default EditableMathExample;
