import Head from 'next/head'
import { Inter } from 'next/font/google'

import mathjs from 'mathjs';
import { parseTex, evaluateTex } from 'tex-math-parser' // ES6 module


const inter = Inter({ subsets: ['latin'] })
import dynamic from "next/dynamic";
import {mmlToPython, mmlToText, mmlToExcel} from '@/translator/mmlToCode';
const EquationEditorComp = dynamic(
  () => import("../components/EquationEditorComp"),
  {
    ssr: false,
  }
);
import { SetStateAction, useState } from "react";
import styles from "@/styles/Equation.module.css";
const initialLatex =
  'A=\\frac{\\cos\\left(b^2+c^2-a^2\\right)}{\\sqrt{2\\cdot b\\cdot c}}'

export default function Home() {
  const [latex, setLatex] = useState(initialLatex)
  const [text, setText] = useState('')
  const [c_text, setC_text] = useState('')

  const [python, setPython] = useState('')
  const [excel, setExcel] = useState('')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Equation Editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.center}>
      <h2>Editable Math Field</h2>
      <EquationEditorComp
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
          setText(mathField.text())

          console.log('Editable mathfield changed:', mathField.latex())
          let mathJSTree = parseTex(mathField.latex());

          console.log('Editable mathfield changed:', mathJSTree)
          console.log("JSON: " + mmlToText(mathJSTree))
          setC_text(mmlToText(mathJSTree))
          setPython(mmlToPython(mathJSTree))
          setExcel(mmlToExcel(mathJSTree))

        }}
        // mathquillDidMount={(mathField) => {
        //   setText(mathField.text())
        // }}
      />
      <div className={styles.resultContainer}>
        <span>Raw latex:</span>
        <span className={styles.resultLatex}>{latex}</span>
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
        <span className={styles.resultLatex}>{python}</span>
      </div>
      <div className={styles.resultContainer}>
        <span>Excel:</span>
        <span className={styles.resultLatex}>{excel}</span>
      </div>
      <button
        onClick={() => {
          setLatex(initialLatex)
        }}
      >
        Reset field
      </button>
        {/* <h1>Equation</h1>
        <EquationEditorComp onChange={(mathField: MathField)=> {
          setLatex(mathField.latex())

        }} />
        <p>{latex}</p> */}
      </div>
    </main>
    </>
  )
}
