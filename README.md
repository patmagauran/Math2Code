# Math2Code
## About
This allows you to easily enter an equation and convert it to various formats automatically, including LaTex, Python, and Excel! This assists in eliminating the chance of a typo that affects your results. The input editor automatically displays your equation in an easy to read, typeset format and supports plain-text and LaTex input for ease of use.

### Function Support List:

| Function | Latex | Text  | Excel | Python | Notes |
| -------- | ----- | ----  | ----  | ------ | ----- |
| +        | Y     | Y     | Y     | Y      |       |
| -        | Y     | Y     | Y     | Y      |       |
| /        | Y     | Y     | Y     | Y      |       |
| *        | Y     | Y     | Y     | Y      |       |
| ^        | Y     | Y     | Y     | Y      |       |
| sqrt     | Y     | Y     | Y     | Y      |       |
| sin      | Y     | Y     | Y     | Y      |       |
| cos      | Y     | Y     | Y     | Y      |       |
| tan      | Y     | Y     | Y     | Y      |       |
| arcsin   | Y     | Y     | Y     | Y      |       |
| arccos   | Y     | Y     | Y     | Y      |       |
| arctan   | Y     | Y     | Y     | Y      |       |
| e^x      | Y     | Y     | Y     | Y      |       |
| ln       | Y     | N     | N     | N      |       |
| log      | N     | N     | N     | N      |       |

### Constant Support List
 - Pi
 - e
## Usage
To use this, just enter your equation in the input field and get formatted output below! Some tips
 - Some functions do not automatically convert when you type them and you must type their LaTex Version, i.e `\sqrt` instead of just `sqrt`
 - It uses implicit multiplication - that means no multi-letter variables 
 - It does not support subscripts
 - It does not support greek symbols currently

## Roadmap
### Alpha
- [X] Reads in Typed equation to latex
- [X] Converts Latex back to text
- [X] Converts Latex back to Excel and Python
- [ ] Supports full algebraic and trigonometric function set
- [X] Unit Tests written and pass
- [X] Supports standard natural constants pi and e
- [ ] Error messages for invalid or unrecognized inputs
- [ ] Autocomplete for base functions
- [ ] Disclaimer on unsupported features (Subscripts, multiletter variables, etc.)
- [ ] Quick guide
- [ ] Support Greek Symbols

### Beta
- [ ] Improve page layout
- [ ] Add Support for Java, Java BigDecimal, C
- [ ] Optimize page payload
- [ ] Generate working code samples
- [ ] Support subscripted variables
- [ ] Generate Transparent PNGs and SVGs of typeset equations

### Beta 2
- [ ] Allow defining variable types
- [ ] Allow defining constants
- [ ] Generate Excel Table

### Release
- [ ] Final Page load optimization
- [ ] Usage analytics
- [ ] Error analytics
- [ ] Expand test cases
- [ ] UI test cases

### Post-Release Features
- [ ] Equation Simplification
- [ ] Generation of Error Progogation Equations
- [ ] Multi-Equation / Multi-Stage equation generation
- [ ] Inclusion of Error Propogation in Excel


## Attributions
This relies on the following technologies:
 - [React](https://react.dev/)
 - [Mathquill](http://mathquill.com/) and [react-mathquill](https://github.com/viktorstrate/react-mathquill)
 - [tex-math-parser](https://github.com/davidtranhq/tex-math-parser)
 - [Math.JS](https://mathjs.org/)
 - [Next.JS](https://nextjs.org/)
 - [React-syntax-highlighting](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
