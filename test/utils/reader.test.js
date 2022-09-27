const reader = require('./../../lib/utils/reader');

describe("Reader test suite", () => {
    test("Case 1. Get information from Excel file", () => {
        const rawData = reader.readXlsx('./public/file.xlsx');

        expect(rawData).not.toBeUndefined();
    });
});