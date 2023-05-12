import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import {
  latexToPython,
  latexToText,
  latexToExcel,
} from "@/translator/latexToCode";
const EquationEditorComp = dynamic(
  () => import("../components/EquationEditorComp"),
  {
    ssr: false,
  }
);
const CodeField = dynamic(
  () => import("../components/CodeField"),
  {
    ssr: false,
  }
);
import { SetStateAction, useState } from "react";
import styles from "@/styles/Equation.module.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const initialLatex =
  "A=\\frac{\\cos\\left(b^2+c^2-a^2\\right)}{\\sqrt{2\\cdot b\\cdot c}}";

export default function Home() {
  const [latex, setLatex] = useState(initialLatex);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [c_text, setC_text] = useState("");

  const [python, setPython] = useState("");
  const [excel, setExcel] = useState("");
  return (
    <>
      <Head>
        <title>Math2Code</title>
        <meta
          name="description"
          content="Interactive Equation editor which converts typeset equations into code and excel-compatibile formulas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         <main className={styles.main}>
        <div className={styles.center}>
          <h1>Math2Code</h1>
          <div>
            <b>Note:</b>
            <p>
              This is currently in Alpha Stage and is intended for testing
              purposes only. If you encounter any issues please open an issue on
              github or let me know. Please verify any output from this before
              use.
            </p>
            <p>
              I Recommend reading over the readme to fully understand the current state of the app and its limitations: <a href="https://github.com/patmagauran/Math2Code/blob/main/README.md">README</a>
            </p>
            <a href="https://github.com/patmagauran/Math2Code">
              Access the Github repo Here!
            </a>
            <b></b>
          </div>
          <div>
            <EquationEditorComp
              latex={latex}
              error={error}
              onChange={(mathField) => {
                setLatex(mathField.latex());
                setText(mathField.text());
                try {
                  console.log("Editable mathfield changed:", mathField.latex());
                  let latex = mathField.latex();
                  setC_text(latexToText(latex));
                  setPython(latexToPython(latex));
                  setExcel(latexToExcel(latex));
                } catch (error: any) {
                  setC_text("");
                  setPython("");
                  setExcel("");
                  setError(error.message);
                }
              }}
              // mathquillDidMount={(mathField) => {
              //   setText(mathField.text())
              // }}
            />

            <div className={styles.resultContainer}>
              <span>Raw latex:</span>
              <CodeField language="latex" code={latex}/>

           </div>
            <div className={styles.resultContainer}>
              <span>Raw text:</span>
              <span className={styles.resultLatex}>{text}</span>
            </div>
            <div className={styles.resultContainer}>
              <span>Computed text:</span>
              <span className={styles.resultLatex}>{c_text}</span>
            </div>
            <div className={styles.resultContainer}>
              <span>Python:</span>
              <CodeField language="python" code={python}/>
            </div>
            <div className={styles.resultContainer}>
              <span>Excel:</span>
              <CodeField language="excel" code={excel}/>

            </div>
            <button
              onClick={() => {
                setLatex(initialLatex);
              }}
            >
              Reset field
            </button>
          </div>
          {/* <h1>Equation</h1>
        <EquationEditorComp onChange={(mathField: MathField)=> {
          setLatex(mathField.latex())

        }} />
        <p>{latex}</p> */}

          <div>
            Really like this project and want to support me? Feel free to buy me
            a coffee.{" "}
            <a href="https://www.paypal.com/donate/?business=BPBZSGK6CK8P8&no_recurring=1&currency_code=USD">
              Donate Here!
            </a>
          </div>
          <div>Copyright 2023 by Patrick Magauran. All rights reserved.</div>
        </div>
      </main>
        </Box>
    </Container>
     
    </>
  );
}
