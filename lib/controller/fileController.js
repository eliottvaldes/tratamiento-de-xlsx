const excelController = require('./excelController');
const fileService = require('./../services/fileService');

class fileController {
    static createFile() {
        fileService.createFile('Contacts.txt', '');
        console.log('Archivo creado con exito');
    }
    static addInfo(path) {
        const contacts = excelController.getContacts(path);
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].nombre === undefined || contacts[i].numero === undefined) {} else {
                fileService.addInfo('./Contacts.txt', fileService.createVCF(contacts[i]));
            }
        }
        const fileName = excelController.getFileName(path);
        fileService.renameFile('./Contacts.txt', `./${fileName}.vcf`);
    }
    static moveFile(fileName) {
        fileService.moveFile(fileName);
    }
}

module.exports = fileController;