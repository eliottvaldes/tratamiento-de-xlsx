const excelController = require('./excelController');
const fileService = require('./../services/fileService');

class fileController {
    static createFile() {
        fileService.createFile('contacts.vcf', fileService.createVCF(excelController.getContacts()[1]));
        console.log('Archivo creado con exito');
        fileService.moveFile();
    }
    static addInfo() {
        fileService.addInfo('../../public/contacts.vcf', contact);
    }
    static deleteFile() {
        fileService.deleteFile('contacts.vcf');
    }
}

module.exports = fileController;