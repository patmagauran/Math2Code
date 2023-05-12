import pythonMap from "./python.json";
import textMap from "./text.json";
import excelMap from "./excel.json";
import { MathNode, map } from "mathjs";
import { parseTex } from 'tex-math-parser' // ES6 module
import { log } from "console";

function translate(mml: MathNode, mapping: any): string {
  if (mml == undefined || mml.type == undefined) {
    return "";
  }
  switch (mml.type) {
    case "OperatorNode":
      if (mml.args != undefined) {
        let left = translate(mml.args[0], mapping);
        let right = translate(mml.args[1], mapping);
        let op = mml.fn;
        if (op != undefined) {
          if (op == "pow") {
            if (mml.args[0].name == "e") {
              op = "exp";
            }
          }
          let mappingOp = mapping.operators[op];
          if (mappingOp != undefined) {
            switch (mappingOp.type) {
              case "p":
                return mappingOp.symbol + "(" + left + ", " + right + ")";
              case "i":
                return "(" + left + " " + mappingOp.symbol + " " + right + ")";
              case "u":
                return mappingOp.symbol +left;
              case "ur":
                return mappingOp.symbol + "(" + right + ")";
              // case "log":
              //   return logFunc(mappingOp, left,right);
            }
          } else {
            return "(" + left + " " + (mml.op ?? "") + " " + right + ")";
          }
        } else {
          return "(" + left + " " + right + ")";
        }
      } else {
        return mml.op?.toString() ?? "";
      }
      break;
    case "FunctionNode":
      if (mml.args != undefined) {
        if (mml.name != undefined) {
          let fn = mml.name;
          let invert = false;
          if (mapping.operators[mml.name] != undefined) {
            if (mml.name == "log" || mml.name == "log10") {
              return logFunc(mml.name, mapping.operators[mml.name], translate(mml.args[0], mapping), translate(mml.args[1], mapping));
            }
            if (mml.name == "nthRoot") {
              return nthRoot(mapping.operators[mml.name], translate(mml.args[0], mapping), translate(mml.args[1], mapping));
            }
            fn = mapping.operators[mml.name].symbol;
            if (mapping.operators[mml.name].invert == true) {
              invert = true;
            }
          }
          let args = mml.args.map((arg) => translate(arg, mapping));
          if (invert == true) {
            return fn + "(1 / " + args.join(", ") + ")";
          }
          return fn + "(" + args.join(", ") + ")";
        } else {
          let args = mml.args.map((arg) => translate(arg, mapping));
          return "(" + args.join(", ") + ")";
        }
      }
    case "ConstantNode":
      return mml.value;
      break;
    case "SymbolNode":
      let name = mml.name ?? "";
      let mappingSym = mapping.symbols[name];
      if (mappingSym != undefined && mappingSym.symbol != undefined) {
        return mappingSym.symbol;
      }
      return name;
      break;
    case "AssignmentNode":
      return mml.name + " = " + translate(mml.value, mapping);
  }

  return "";
}

function logFunc(name: string, mappingOp:any, arg:string,base:string): string {
  let logSym = mappingOp.logSym ?? "log";
  let lnSym = mappingOp.lnSym ?? "ln";
  if (name == "log") {
    if (base === undefined || base === "") {
      return lnSym + "(" + arg + ")";
    } else {
      return logSym + "(" + arg + ", " + base + ")";
    }
  } else {
    if (mappingOp.log10 == true) {
      return mappingOp.log10Sym + "(" + arg + ")";
    } else {
      return logSym + "(" + arg + ", 10)";
    }
  } 
}

function nthRoot(mappingOp:any, arg:string, root: string) : string {
  if (mappingOp.exponent == true) {
    return arg + " ^ (1 / " + root + ")";
  } else {
    return mappingOp.symbol + "(" + arg + ", " + root + ")";
  }
}

function tokenize(str: string) {
  return str.match(/[()]|[^()]+/g);
}

function parse(toks: RegExpMatchArray, depth = 0): Array<string> {
  let ast: Array<any> = [];

  while (toks.length) {
    let t = toks.shift();

    switch (t) {
      case "(":
        ast.push(parse(toks, depth + 1));
        break;
      case ")":
        if (!depth) throw new SyntaxError("mismatched )");
        return ast;
      default:
        ast.push(t ?? "");
    }
  }

  if (depth) {
    throw new SyntaxError("premature EOF");
  }

  return ast;
}

function generate(el: Array<string> | string): string {
  if (!Array.isArray(el)) return el;

  while (el.length === 1 && Array.isArray(el[0])) el = el[0];
  if (typeof el === "object") {
    return "(" + el.map(generate).join("") + ")";
  } else {
    return "";
  }
}

function prepareLatex(latex: string): string {
 // console.log("PreCleaned Latex:", latex);
  latex = latex.replace(/\\(sin|cos|tan|cot|csc|sec|sinh|cosh|tanh|coth|csch|sech)\^{*-1}*(?:\\left)*\((.+?)(?:\\right)*\)/, "\\arc$1($2)");
  // latex = latex.replace(/\\cos\^{*-1}*(?:\\left)*\((.+?)(?:\\right)*\)/, "\\arccos($1)");
  // latex = latex.replace(/\\tan\^{*-1}*(?:\\left)*\((.+?)(?:\\right)*\)/, "\\arctan($1)");
  latex = latex.replace(/\\(sin|cos|tan|cot|csc|sec|sinh|cosh|tanh|coth|csch|sech)\^{*(-*\d+)}*(?:\\left)*\((.+?)(?:\\right)*\)/, "(\\$1\\left($3\\right))^{$2}");
  // latex = latex.replace(/\\cos\^{*(-*\d+)}*(?:\\left)*\((.+?)(?:\\right)*\)/, "(\\cos\\left($2\\right))^{$1}");
  // latex = latex.replace(/\\tan\^{*(-*\d+)}*(?:\\left)*\((.+?)(?:\\right)*\)/, "(\\tan\\left($2\\right))^{$1}");
  //console.log("Cleaned Latex:", latex);

  return latex;
}

function trimParentheses(str: string): string {
  if (str.startsWith("(") && str.endsWith(")")) {
    return str.substring(1, str.length - 1);
  }
  return str;
}

function doTransform(latex: string, mapping: any): string {
  let cleanLatex = prepareLatex(latex);
  let mathJSTree = parseTex(cleanLatex, false);

  let code = translate(mathJSTree, mapping);
  let tokens = tokenize(code);
  if (tokens != null) {
  let ast = parse(tokens);
  return trimParentheses(generate(ast));
  } else {
    return trimParentheses(code);
  }
}

export function latexToPython(latex: string) {
  return doTransform(latex, pythonMap);
}

export function latexToText(latex: string) {
  return doTransform(latex, textMap);
}

export function latexToExcel(latex: string) {
  return doTransform(latex, excelMap);
}
/*
To generate working code:
  - Need list of variables
  - Indicate assignment variable
  - Need list of modules
  - Will be language specific to define function signature and body
  - Generate method call using a preset value
  - For typed languages, need to assign a type(float?)

*/