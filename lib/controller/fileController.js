const excelController = require('./excelController');
const fileService = require('./../services/fileService');
const contacts = excelController.getContacts();

class fileController {
    static createFile() {

        fileService.createFile('Contacts.txt', '');
        console.log('Archivo creado con exito');
    }
    static addInfo() {
        for (let i = 0; i < contacts.length; i++) {
            fileService.addInfo('./Contacts.txt', fileService.createVCF(contacts[i]));
        }
        fileService.renameFile('./Contacts.txt', './Contacts.vcf');
    }
    static deleteFile(file) {
        fileService.deleteFile(file);
    }
    static moveFile() {
        fileService.moveFile();
    }
}

module.exports = fileController;