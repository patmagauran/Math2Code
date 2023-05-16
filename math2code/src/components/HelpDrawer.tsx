import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import StaticMathField  from "../components/StaticLatexComp";

function createData(func: string, latex: string, formatted?: string) {
  return { func, latex, formatted };
}

const AlgebraRows = [
  createData("Addition", "a+b"),
  createData("Subtraction", "a-b"),
  createData("Multiplication", "a\\cdot b", "a\\cdot b"),
  createData("Division", "\\frac{a}{b}"),
  createData("Exponentiation", "a^b"),
  createData("Square Root", "\\sqrt{a}"),
  createData("n-th Root", "\\sqrt[n]{a}"),
  createData("Absolute Value", "\\left|a\\right|"),
  createData("Logarithm", "\\log_{a}\\left(b\\right)"),
  createData("Natural Logarithm", "\\ln\\left(a\\right)"),
  createData("Modulo", "a \\% b"),
];
const TrigRows = [
  createData("sin(x)", "\\sin(x)"),
  createData(
    "arcsin(x)",
    "\\arcsin(x) or \\sin^{-1}(x)",
    "\\sin^{-1}\\left(x\\right)"
  ),
  createData("cos(x)", "\\cos(x)"),
  createData(
    "arccos(x)",
    "\\arccos(x) or \\cos^{-1}(x)",
    "\\cos^{-1}\\left(x\\right)"
  ),
  createData("tan(x)", "\\tan(x)"),
  createData(
    "arctan(x)",
    "\\arctan(x) or \\tan^{-1}(x)",
    "\\tan^{-1}\\left(x\\right)"
  ),
  createData("sec(x)", "\\sec(x)"),
  createData(
    "arcsec(x)",
    "\\arcsec(x) or \\sec^{-1}(x)",
    "\\sec^{-1}\\left(x\\right)"
  ),
  createData("csc(x)", "\\csc(x)"),
  createData(
    "arccsc(x)",
    "\\arccsc(x) or \\csc^{-1}(x)",
    "\\csc^{-1}\\left(x\\right)"
  ),
  createData("cot(x)", "\\cot(x)"),
  createData(
    "arccot(x)",
    "\\arccot(x) or \\cot^{-1}(x)",
    "\\cot^{-1}\\left(x\\right)"
  ),
];

const HyperbolicRows = [
  createData("sinh(x)", "\\sinh(x)"),
  createData(
    "arcsinh(x)",
    "\\arcsinh(x) or \\sinh^{-1}(x)",
    "\\sinh^{-1}\\left(x\\right)"
  ),
  createData("cosh(x)", "\\cosh(x)"),
  createData(
    "arccosh(x)",
    "\\arccosh(x) or \\cosh^{-1}(x)",
    "\\cosh^{-1}\\left(x\\right)"
  ),
  createData("tanh(x)", "\\tanh(x)"),
  createData(
    "arctanh(x)",
    "\\arctanh(x) or \\tanh^{-1}(x)",
    "\\tanh^{-1}\\left(x\\right)"
  ),
  createData("sech(x)", "\\sech(x)"),
  createData(
    "arcsech(x)",
    "\\arcsech(x) or \\sech^{-1}(x)",
    "\\sech^{-1}\\left(x\\right)"
  ),
  createData("csch(x)", "\\csch(x)"),
  createData(
    "arccsch(x)",
    "\\arccsch(x) or \\csch^{-1}(x)",
    "\\csch^{-1}\\left(x\\right)"
  ),
  createData("coth(x)", "\\coth(x)"),
  createData(
    "arccoth(x)",
    "\\arccoth(x) or \\coth^{-1}(x)",
    "\\coth^{-1}\\left(x\\right)"
  ),
];

const GreekRows = [
  createData("alpha", "\\alpha"),
  createData("beta", "\\beta"),
  createData("gamma", "\\gamma"),
  createData("delta", "\\delta"),
  createData("epsilon", "\\epsilon"),
  createData("varepsilon", "\\varepsilon"),
  createData("zeta", "\\zeta"),
  createData("eta", "\\eta"),
  createData("theta", "\\theta"),
  createData("vartheta", "\\vartheta"),
  createData("iota", "\\iota"),
  createData("kappa", "\\kappa"),
  createData("lambda", "\\lambda"),
  createData("mu", "\\mu"),
  createData("nu", "\\nu"),
  createData("xi", "\\xi"),
  createData("pi", "\\pi"),
  createData("varpi", "\\varpi"),
  createData("rho", "\\rho"),
  createData("varrho", "\\varrho"),
  createData("sigma", "\\sigma"),
  createData("varsigma", "\\varsigma"),
  createData("tau", "\\tau"),
  createData("upsilon", "\\upsilon"),
  createData("phi", "\\phi"),
  createData("varphi", "\\varphi"),
  createData("chi", "\\chi"),
  createData("psi", "\\psi"),
  createData("omega", "\\omega"),
  createData("Gamma", "\\Gamma"),
  createData("Delta", "\\Delta"),
  createData("Theta", "\\Theta"),
  createData("Lambda", "\\Lambda"),
  createData("Xi", "\\Xi"),
  createData("Pi", "\\Pi"),
  createData("Sigma", "\\Sigma"),
  createData("Upsilon", "\\Upsilon"),
  createData("Phi", "\\Phi"),
  createData("Psi", "\\Psi"),
  createData("Omega", "\\Omega"),
];

const FunctionSet = (props: {
  Title: string;
  onRowClick: (latex: string) => void;
  rows: { func: string; latex: string; formatted: string | undefined; }[];
}) => {
  const rows = props.rows;
  return (
    <Box sx={{
        my: "5px",
        padding: "5px",
    }}>
      <Typography variant="subtitle1">{props.Title}</Typography>
      <TableContainer>
        <Table padding="none" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Math Function</TableCell>
              <TableCell align="right">Latex Code</TableCell>
              <TableCell align="right">Formatted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.func}
                sx={{ "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer" }}
                onClick={() => {
                    props.onRowClick(row.formatted ?? row.latex);
                }}
                
              >
                <TableCell component="th" scope="row">
                  {row.func}
                </TableCell>
                <TableCell align="right">{row.latex}</TableCell>
                <TableCell align="right">
                  <StaticMathField>
                    {row.formatted ?? row.latex}
                  </StaticMathField>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
const drawer = (props: { onRowClick: (latex: string) => void }) => {
  return (
    <Box>
        <Typography variant="h4">Help</Typography>
        <Typography paragraph>Here are all the functions supported by the equation editor. You can click on them to insert the command into the editor, type the latex code, or write like normal!</Typography>

      <FunctionSet Title="Algebra" rows={AlgebraRows} onRowClick={props.onRowClick}/>
      <FunctionSet Title="Trigonometry" rows={TrigRows}  onRowClick={props.onRowClick}/>
      <FunctionSet Title="Hyperbolic Trigonometry" rows={HyperbolicRows} onRowClick={props.onRowClick} />
      <FunctionSet Title="Greek Letters" rows={GreekRows} onRowClick={props.onRowClick} />
    </Box>
  );
};
export default drawer;
