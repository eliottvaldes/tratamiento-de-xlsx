const reader = require('./reader');
const excelServices = require('./excelServices')
const path = './test.xlsx';

class excellController {
    static readXlsx() {
        return reader.readXlsx(path);
    }
    static getCleanData() {
        return excelServices.deleteDirtyData(this.readXlsx());
    }
};

module.exports = excellController;