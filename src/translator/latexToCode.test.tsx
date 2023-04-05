import {latexToPython, latexToText, latexToExcel} from './latexToCode';

/*
Need to cover the following cases:
- =, +, -, *, /, ^
- cos, sin, tan, log, ln, sqrt
- arccos, arcsin, arctan
- pi, e
- numbers
- variables
- parentheses
- fractions
- error handling
- order of operations
- implicit multiplication


*/
describe('Conversion to Text', () => { 
    test('a + b', () => {
        expect(latexToText('a + b')).toBe('(a + b)');
    });
    test('a + b - c * d / e', () => {
        expect(latexToText('a + b - c * d / e')).toBe('((a + b) - ((c * d) / e))');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}', () => {
        expect(latexToText('x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}')).toBe('(a ^ (2 * b))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToText('(\\sin(x))^2 + (\\cos(x))^2 = 1')).toBe('(a ^ (2 * b))');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToText('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('(a ^ (2 * b))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}', () => {
        expect(latexToText('c =\\sqrt{ a^2 + b^2 - 2ab\\cos(C)}')).toBe('(a ^ (2 * b))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToText('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('(a ^ (2 * b))');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToText('x = \\sin(\\pi)')).toBe('(a ^ (2 * b))');
    });
 })