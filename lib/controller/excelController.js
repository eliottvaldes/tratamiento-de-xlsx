const reader = require('../utils/reader');
const excelServices = require('../services/excelServices')
const path = './public/file.xlsx';

class excellController {
    static readXlsx() {
        return reader.readXlsx(path);
    }
    static getCleanData() {
        return excelServices.deleteDirtyData(this.readXlsx());
    }
    static getContacts() {
        return excelServices.filterContacts(this.readXlsx());
    }
};

module.exports = excellController;