import pythonMap from "./python.json";
import textMap from "./text.json";
import excelMap from "./excel.json";
import { MathNode } from "mathjs";
import { parseTex } from 'tex-math-parser' // ES6 module

function translate(mml: MathNode, mapping: any): string {
  switch (mml.type) {
    case "OperatorNode":
      if (mml.args != undefined) {
        let left = translate(mml.args[0], mapping);
        let right = translate(mml.args[1], mapping);
        let op = mml.fn;
        if (op != undefined) {
          let mappingOp = mapping[op];
          if (mappingOp != undefined) {
            switch (mappingOp.type) {
              case "p":
                return mappingOp.symbol + "(" + left + ", " + right + ")";
              case "i":
                return "(" + left + " " + mappingOp.symbol + " " + right + ")";
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
          if (mapping[mml.name] != undefined) {
            fn = mapping[mml.name].symbol;
          }
          let args = mml.args.map((arg) => translate(arg, mapping));
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
      return mml.name ?? "";
      break;
    case "AssignmentNode":
      return mml.name + " = " + translate(mml.value, mapping);
  }

  return "";
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

function doTransform(latex: string, mapping: any): string {
  let mathJSTree = parseTex(latex);

  let code = translate(mathJSTree, mapping);
  let tokens = tokenize(code);
  if (tokens != null) {
  let ast = parse(tokens);
  return generate(ast);
  } else {
    return code;
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
