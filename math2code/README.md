# Math2Code
## About
This allows you to easily enter an equation and convert it to various formats automatically, including LaTex, Python, and Excel! This assists in eliminating the chance of a typo that affects your results. The input editor automatically displays your equation in an easy to read, typeset format and supports plain-text and LaTex input for ease of use.

### Function Support List:

| Function       | Latex | Text  | Excel | Python | Notes |
| --------       | ----- | ----  | ----  | ------ | ----- |
| +              | Y     | Y     | Y     | Y      |       |
| -              | Y     | Y     | Y     | Y      |       |
| /              | Y     | Y     | Y     | Y      |       |
| *              | Y     | Y     | Y     | Y      |       |
| ^              | Y     | Y     | Y     | Y      |       |
| sqrt           | Y     | Y     | Y     | Y      |       |
| sin            | Y     | Y     | Y     | Y      |       |
| cos            | Y     | Y     | Y     | Y      |       |
| tan            | Y     | Y     | Y     | Y      |       |
| arcsin         | Y     | Y     | Y     | Y      |       |
| arccos         | Y     | Y     | Y     | Y      |       |
| arctan         | Y     | Y     | Y     | Y      |       |
| e^x            | Y     | Y     | Y     | Y      |       |
| ln             | Y     | Y     | Y     | Y      |       |
| log            | Y     | Y     | Y     | Y      |       |
| mod            | Y     | Y     | Y     | Y      |       |
| arbitrary root | Y     | Y     | Y     | Y      |       |
| cot            | Y     | Y     | Y     | Y      |       |
| arccot         | Y     | Y     | Y     | Y      |       |
| sinh           | Y     | Y     | Y     | Y      |       |
| cosh           | Y     | Y     | Y     | Y      |       |
| tanh           | Y     | Y     | Y     | Y      |       |
| coth           | Y     | Y     | Y     | Y      |       |
| sec            | Y     | Y     | Y     | Y      |       |
| csc            | Y     | Y     | Y     | Y      |       |
| abs            | Y     | Y     | Y     | Y      | Only supports \left\| syntax      |

### Constant Support List
 - Pi
 - e
## Usage
To use this, just enter your equation in the input field and get formatted output below! Some tips
 - Some functions do not automatically convert when you type them and you must type their LaTex Version, i.e `\sqrt` instead of just `sqrt`
 - It does not support greek symbols currently

## Roadmap
### Alpha
- [X] Reads in Typed equation to latex
- [X] Converts Latex back to text
- [X] Converts Latex back to Excel and Python
- [X] Supports full algebraic and trigonometric function set
- [X] Unit Tests written and pass
- [X] Supports standard natural constants pi and e
- [X] Error messages for invalid or unrecognized inputs
- [X] Autocomplete for base functions
- [ ] Disclaimer on unsupported features
- [ ] Quick guide
- [ ] Support Greek Symbols
- [X] Disable implicit variable multiplication and support multi-letter variables

### Beta
- [ ] Improve page layout
- [ ] Add Support for Java, Java BigDecimal, C
- [ ] Optimize page payload
- [ ] Generate working code samples
- [X] Support subscripted variables
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
