import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import dynamic from "next/dynamic";

const EquationEditorComp = dynamic(
  () => import("../components/EquationEditorComp"),
  {
    ssr: false,
  }
);
import { SetStateAction, useState } from "react";
import styles from "@/styles/Equation.module.css";
const initialLatex =
  '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'

export default function Home() {
  const [latex, setLatex] = useState(initialLatex)
  const [text, setText] = useState('')
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
