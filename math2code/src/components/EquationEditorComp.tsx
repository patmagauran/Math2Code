import { Error } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";

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
    <Tooltip title={error}>
      <Error />
      </Tooltip>
  );
}
const EditableMathExample = (props: EditorProps) => {
  return (
    <Card>
      <EditableMathField latex={props.latex} onChange={props.onChange} />
      <ErrorIconComp error={props.error} />
    </Card>
  );
};
export default EditableMathExample;
