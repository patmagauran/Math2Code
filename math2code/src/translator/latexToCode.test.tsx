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
        expect(latexToText('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToText('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}', () => {
        expect(latexToText('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}')).toBe('x = ((-b + sqrt((b ^ 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToText('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(sin(x) ^ 2) + (cos(x ^ 2) ^ 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToText('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = sqrt(((x - x) ^ 2) + ((y - y) ^ 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}', () => {
        expect(latexToText('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}')).toBe('c = sqrt(((a ^ 2) + (b ^ 2)) - (((2 * a) * b) * cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToText('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = arcsin(o / h)');
    });
    test('x = \\sin(\\pi * length_{ab})', () => {
        expect(latexToText('x = \\sin(\\pi * length_{ab})')).toBe('x = sin(pi * length_ab)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToText('x = \\sin(\\pi)')).toBe('x = sin(pi)');
    });
    test('y = e^x', () => {
        expect(latexToText('y = e^x')).toBe('y = e^(x)');
    });
    test('y = \\ln(x)', () => {
        expect(latexToText('y = \\ln(x)')).toBe('y = ln(x)');
    });
    test('y = \\log_3{x}', () => {
        expect(latexToText('y = \\log_3{x}')).toBe('y = log(x, 3)');
    });
    test('y = a \\mod y', () => {
        expect(latexToText('y = a \\mod y')).toBe('y = (a % y)');
    });
    test('y = \\sqrt[5]{b}', () => {
        expect(latexToText('y = \\sqrt[5]{b}')).toBe('y = b ^ (1 / 5)');
    });
    test('y = \\cot(a)', () => {
        expect(latexToText('y = \\cot(a)')).toBe('y = cot(a)');
    });
    test('y = \\cot^{-1}(a)', () => {
        expect(latexToText('y = \\cot^{-1}(a)')).toBe('y = arccot(a)');
    });
    test('y = \\arccot(a)', () => {
        expect(latexToText('y = \\arccot(a)')).toBe('y = arccot(a)');
    });
    test('y = \\sinh(a)', () => {
        expect(latexToText('y = \\sinh(a)')).toBe('y = sinh(a)');
    });
    test('y = \\cosh(a)', () => {
        expect(latexToText('y = \\cosh(a)')).toBe('y = cosh(a)');
    });
    test('y = \\tanh(a)', () => {
        expect(latexToText('y = \\tanh(a)')).toBe('y = tanh(a)');
    });
    test('y = \\coth(a)', () => {
        expect(latexToText('y = \\coth(a)')).toBe('y = coth(a)');
    });
    test('y = \\sec(a)', () => {
        expect(latexToText('y = \\sec(a)')).toBe('y = sec(a)');
    });
    test('y = \\csc(a)', () => {
        expect(latexToText('y = \\csc(a)')).toBe('y = csc(a)');
    });
    test('y = \\sinh^2(a)', () => {
        expect(latexToText('y = \\sinh^2(a)')).toBe('y = (sinh(a) ^ 2)');
    });
 })
 describe('Conversion to Excel', () => { 
    test('a + b', () => {
        expect(latexToExcel('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToExcel('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}', () => {
        expect(latexToExcel('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}')).toBe('x = ((-b + sqrt((b ^ 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToExcel('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(sin(x) ^ 2) + (cos(x ^ 2) ^ 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToExcel('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = sqrt(((x - x) ^ 2) + ((y - y) ^ 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}', () => {
        expect(latexToExcel('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}')).toBe('c = sqrt(((a ^ 2) + (b ^ 2)) - (((2 * a) * b) * cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToExcel('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = asin(o / h)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToExcel('x = \\sin(\\pi)')).toBe('x = sin(pi())');
    });
    test('y = e^x', () => {
        expect(latexToExcel('y = e^x')).toBe('y = exp(x)');
    });
 })
 describe('Conversion to Python', () => { 
    test('a + b', () => {
        expect(latexToPython('a + b')).toBe('a + b');
    });
    test('a + b - c * d / e', () => {
        expect(latexToPython('a + b - c * d / f')).toBe('(a + b) - ((c * d) / f)');
    });
    test('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}', () => {
        expect(latexToPython('x = \\frac{-b + \\sqrt{b^2 - 4*a*c}}{2a}')).toBe('x = ((-b + math.sqrt((b ** 2) - ((4 * a) * c))) / (2 * a))');
    });
    test('\\sin^2(x) + \\cos^2(x) = 1', () => {
        expect(latexToPython('(\\sin(x))^2 + (\\cos(x^2))^2')).toBe('(math.sin(x) ** 2) + (math.cos(x ** 2) ** 2)');
    });
    test('d = \\sqrt{(x-x)^2 + (y-y)^2}', () => {
        expect(latexToPython('d = \\sqrt{(x-x)^2 + (y-y)^2}')).toBe('d = math.sqrt(((x - x) ** 2) + ((y - y) ** 2))');
    });
    test('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}', () => {
        expect(latexToPython('c =\\sqrt{ a^2 + b^2 - 2*a*b\\cos(C)}')).toBe('c = math.sqrt(((a ** 2) + (b ** 2)) - (((2 * a) * b) * math.cos(C)))');
    });
    test('x = \\sin^{-1}\\left(\\frac{o},{h}\\right)', () => {
        expect(latexToPython('x = \\sin^{-1}\\left(\\frac{o}{h}\\right)')).toBe('x = math.asin(o / h)');
    });
    test('x = \\sin(\\pi)', () => {
        expect(latexToPython('x = \\sin(\\pi)')).toBe('x = math.sin(math.pi)');
    });
    test('y = e^x', () => {
        expect(latexToPython('y = e^x')).toBe('y = math.exp(x)');
    });
 })