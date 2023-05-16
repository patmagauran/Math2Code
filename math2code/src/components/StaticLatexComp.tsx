import { convertLatexToMarkup } from "mathlive";
import React from "react";

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
//addStyles();
type EditorProps = {

  children: string;
  
};

const StaticMathFieldComp = (props: EditorProps) => {
  const mark = convertLatexToMarkup(props.children);
  return (

      <div dangerouslySetInnerHTML={{ __html: mark }}></div>
  
  );
};
export default StaticMathFieldComp;
