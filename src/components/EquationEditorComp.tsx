import React, { useState } from 'react'
import { addStyles, EditableMathField, MathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()
type EditorProps = {
  onChange: (arg0: MathField) => void,
  latex: string
};
const EditableMathExample = (props: EditorProps) => {

  return (
    <div>
      <EditableMathField
        latex={props.latex}
        onChange={props.onChange}
        
      />
      {/* <p>{latex}</p> */}
    </div>
  )
}
export default EditableMathExample