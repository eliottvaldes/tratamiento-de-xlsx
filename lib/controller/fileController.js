const excelController = require('./excelController');
const fileService = require('./../services/fileService');
const contacts = excelController.getContacts();

class fileController {
    static createFile() {

        fileService.createFile('contacts.txt', '');
        console.log('Archivo creado con exito');
    }
    static addInfo() {
        for (let i = 0; i < contacts.length; i++) {
            fileService.addInfo('./contacts.txt', fileService.createVCF(contacts[i]));
        }
        fileService.renameFile('./contacts.txt', './contacts.vcf');
    }
    static deleteFile(file) {
        fileService.deleteFile(file);
    }
    static moveFile() {
        fileService.moveFile();
    }
}

module.exports = fileController;