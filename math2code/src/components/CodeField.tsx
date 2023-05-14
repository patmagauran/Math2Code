import { PrismLight  as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import excel from 'react-syntax-highlighter/dist/cjs/languages/prism/excel-formula';
import latex from 'react-syntax-highlighter/dist/cjs/languages/prism/latex';
import docco from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';
//import theme from '@/theme';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('excel', excel);
SyntaxHighlighter.registerLanguage('latex', latex)
type FieldProps = {
    code: string,
    language: string
  };
const Component = (props: FieldProps) => {
 //   console.log(SyntaxHighlighter.supportedLanguages);

  //const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language={props.language} style={docco} wrapLongLines={true} customStyle={{
      fontSize: "1rem",
      
      //fontFamily: theme.typography.fontFamily,
    }}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default Component;