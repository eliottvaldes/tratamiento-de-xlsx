const excelController = require('./excelController');
const fileService = require('./../services/fileService');
const contacts = excelController.getContacts();

class fileController {
    static createFile() {

        fileService.createFile('contacts.txt', fileService.createVCF(contacts[0]));
        console.log('Archivo creado con exito');
        fileService.moveFile();
    }
    static addInfo() {
        for (let i = 1; i < contacts.length; i++) {
            fileService.addInfo('./../../public/contacts.txt', fileService.createVCF(contacts[i]));
        }
        fileService.renameFile('./../../public/contacts.txt', './../../public/contacts.vcf');
    }
    static deleteFile(file) {
        fileService.deleteFile(file);
    }
}

module.exports = fileController;