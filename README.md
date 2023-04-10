This is a way to easily enter equations and get them output in various formats.

Goals for output include:
 - LaTeX
 - Python
 - Excel
 - Java(Double)
 - Java(BigDecimal)
 - Possibly Others

This relies on the following technologies:
 - React
 - Mathquill and react-mathquill
 - Next.JS


 Function Support List:

| Function | Latex | Text  | Excel | Python | Notes |
| -------- | ----- | ----  | ----  | ------ | ----- |
| +        | Y     | Y     | Y     | Y      |       |
| -        | Y     | Y     | Y     | Y      |       |
| /        | Y     | Y     | Y     | Y      |       |
| *        | Y     | Y     | Y     | Y      |       |
| ^        | Y     | Y     | Y     | Y      |       |
| sin      | Y     | Y     | Y     | Y      |       |
| cos      | Y     | Y     | Y     | Y      |       |
| tan      | Y     | Y     | Y     | Y      |       |
| arcsin   | Y     | Y     | Y     | Y      |       |
| arccos   | Y     | Y     | Y     | Y      |       |
| arctan   | Y     | Y     | Y     | Y      |       |
| e^x      | Y     | Y     | Y     | Y      |       |


constant Support List
 - Pi
 - e

Future Plans include 
 - Creating fully working code(Each equation represents a function with parameters) including imports
 - Support for specifying Variable types for each and including type casting automatically
 - Generate a full excel table with defined columns for each variable and a separate set of constant values for defined constants
 - The ability to simplify equations
 - Descriptive Error messages