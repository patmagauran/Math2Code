import React from "react";
import { addStyles, StaticMathField } from "react-mathquill";

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();
type EditorProps = {

  children: string;
  
};

const StaticMathFieldComp = (props: EditorProps) => {
  return (

      <StaticMathField
        >{props.children}</StaticMathField>

  );
};
export default StaticMathFieldComp;
