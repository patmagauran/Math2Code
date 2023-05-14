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
const CodeField = dynamic(() => import("../components/CodeField"), {
  ssr: false,
});
import { SetStateAction, useState } from "react";
import styles from "@/styles/Equation.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper, Link, Card, Button, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ResultField from "@/components/ResultField";

const initialLatex =
  "A=\\frac{\\cos\\left(b^2+c^2-a^2\\right)}{\\sqrt{2\\cdot b\\cdot c}}";


const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function Home() {
  const [latex, setLatex] = useState(initialLatex);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [c_text, setC_text] = useState("");

  const [python, setPython] = useState("");
  const [excel, setExcel] = useState("");
  const onChange = (mathField: any) => {
    setLatex(mathField.latex());
    setText(mathField.text());
    try {
      console.log("Editable mathfield changed:", mathField.latex());
      let latex = mathField.latex();
      setC_text(latexToText(latex));
      setPython(latexToPython(latex));
      setExcel(latexToExcel(latex));
      setError("");
    } catch (error: any) {
      setC_text("");
      setPython("");
      setExcel("");
      setError(error.message);
    }
  };
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">Math2Code</Typography>
          <Box>
            <Typography variant="h6">Note:</Typography>
            <Typography>
              This is currently in Alpha Stage and is intended for testing
              purposes only. If you encounter any issues please open an issue on
              github or let me know. Please verify any output from this before
              use.
            </Typography>
            <Typography>
              I Recommend reading over the readme to fully understand the
              current state of the app and its limitations:{" "}
              <Link href="https://github.com/patmagauran/Math2Code/blob/main/README.md">
                README
              </Link>
            </Typography>
            <Link href="https://github.com/patmagauran/Math2Code">
              Access the Github repo Here!
            </Link>
          </Box>
          <Box sx = {{
            padding: "1rem",
          }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={12} >
                <Card sx={{
                      padding: "8px 16px",
                    }}
                  >
                <EquationEditorComp
                  latex={latex}
                  error={error}
                  onChange={onChange}
                  mathquillDidMount={onChange}
                  resetField={() => {
                    setLatex(initialLatex);
                  }}
                />
                </Card>
                
              </Grid>
              <Grid xs={12} md={6}>
                <ResultField text={latex} heading="Latex" language="latex" />

                
              </Grid>

              <Grid xs={12 } md={6}>
              <Card>
                <ResultField text={text} heading = "Raw Text" language="text" />

                </Card>
              </Grid>

              <Grid xs={12} md={6}>
              <Card>
                <ResultField text={c_text} heading = "Computed Text" language="text" />

                </Card>
              </Grid>

              <Grid xs={12} md={6}>
              <Card>
                <ResultField text={python} heading = "Python" language="python" />

                </Card>
              </Grid>

              <Grid xs={12} md={6}>
              <Card>
                <ResultField text={excel} heading = "Excel" language="excel-formula" />

                </Card>
              </Grid>


            </Grid>
          </Box>


          <div>
            Really like this project and want to support me? Feel free to buy me
            a coffee.{" "}
            <a href="https://www.paypal.com/donate/?business=BPBZSGK6CK8P8&no_recurring=1&currency_code=USD">
              Donate Here!
            </a>
          </div>
          <div>Copyright 2023 by Patrick Magauran. All rights reserved.</div>
        </Box>
      </Container>
    </>
  );
}
