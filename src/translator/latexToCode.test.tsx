import {latexToPython, latexToText, latexToExcel} from './latexToCode';


describe('mmlToText', () => { 
    test('a + b', () => {
        expect(latexToText('a + b')).toBe('(a + b)');
    });
 })