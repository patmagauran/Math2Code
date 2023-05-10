import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
type FieldProps = {
    code: string,
    language: string
  };
const Component = (props: FieldProps) => {
    console.log(SyntaxHighlighter.supportedLanguages);

  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language={props.language} style={docco}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default Component;