import {latexToPython, latexToText, latexToExcel} from '../src/translator/latexToCode';
import testMap from "./cases.json";
type Sample = {
    latex: string,

    python: string,
    text: string,
    excel: string,
    description: string
}
type SampleGroup = {
    samples: Sample[],
    name: string
}


testMap.sampleGroups.forEach((sampleGroup: SampleGroup) => {
    describe(sampleGroup.name, () => {
        sampleGroup.samples.forEach((sample: Sample) => {
            describe(sample.description, () => {
                test('Python', () => {
                    expect(latexToPython(sample.latex)).toBe(sample.python);
                });
                test('Text', () => {
                    expect(latexToText(sample.latex)).toBe(sample.text);
                });
                test('Excel', () => {
                    expect(latexToExcel(sample.latex)).toBe(sample.excel);
                });
            });
        })
       
    });
});