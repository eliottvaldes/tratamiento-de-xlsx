const XLSX = require('xlsx');

function leerExcel(path) {
    const workbook = XLSX.readFile(path);
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return xlData;
}

module.exports = leerExcel;