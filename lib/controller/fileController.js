const excelController = require('./excelController');
const fileService = require('./../services/fileService');

class fileController {
    static createFile() {
        fileService.createFile('contacts.vcf', fileService.createVCF(excelController.getContacts()[0]));
    }
    static addInfo() {
        fileService.addInfo('contacts.vcf', excelController.getContacts());
    }
    static deleteFile() {
        fileService.deleteFile('contacts.vcf');
    }
}

module.exports = fileController;