import { Error } from '@mui/icons-material';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import React from 'react';
import MathView from 'react-math-view';
import styles from '@/styles/Equation.module.css';
import { MathfieldElement } from 'mathlive';
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
//addStyles();
type EditorProps = {
  onChange?: (arg0: MathfieldElement) => void;
  onLoad?: (arg0: MathfieldElement) => void;
  error: string;
  resetField: () => void;
};
const ErrorIconComp = (props: { error: string }) => {
  const error = props.error;
  if (error == undefined || error == '') {
    return <></>;
  }
  return (
    <Box
      sx={{
        lineHeight: 0,
        marginRight: '5px',
      }}
    >
      <Tooltip title={error}>
        <Error color="error" />
      </Tooltip>
    </Box>
  );
};
// eslint-disable-next-line react/display-name
const ControlledMathView = React.memo((props: { onChange?: (arg0: MathfieldElement) => void;
  onLoad?: (arg0: MathfieldElement) => void;}) => {

  // useEffect(() => {
  //   console.log('ControlledMathView value changed', value);
  // }, [value]);

  return (
    <MathView
    onChange={(e) => {
      props.onChange && props.onChange(e.currentTarget);
    }}
    onLoad={(e) => {
      props.onLoad && props.onLoad(e.currentTarget);
    }}

    className={styles.mathquill}
    options={{
      mathVirtualKeyboardPolicy: 'manual',
    }}
   // value={props.latex}
    // mathquillDidMount={props.mathquillDidMount}
    // config={{
    //   autoCommands: "pi theta sqrt nthroot",

    // }}
  />
  )
}, (prevProps, nextProps) => {
  return (prevProps.onChange === nextProps.onChange) && (prevProps.onLoad === nextProps.onLoad);
  });
const EditableMathExample = (props: EditorProps) => {
  window.MathfieldElement.soundsDirectory = null;

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h5">Equation</Typography>
      <ControlledMathView
        onChange={props.onChange}
        onLoad={props.onLoad}
        
       // value={props.latex}
        // mathquillDidMount={props.mathquillDidMount}
        // config={{
        //   autoCommands: "pi theta sqrt nthroot",

        // }}
      />

      {/* </MathView>  */}
      <ErrorIconComp error={props.error} />
      <Button
        sx={{ marginLeft: '5px' }}
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
