const fs = require('fs');
const fs_extra = require('fs-extra');
const header = 'BEGIN:VCARD\nVERSION:2.1\nN:;'
const footer = '\nEND:VCARD\n'
const src = "../controller/contacts.txt";
const dest = "../../public/contacts.txt"

class fileService {
    static createFile(name, content) {
        fs.writeFile(name, content, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
    static addInfo(name, content) {
        fs.appendFile(name, content, function(err) {
            if (err) {
                console.log(' ');
            }
        });
    }
    static deleteFile(name) {
        fs.unlink(name, function(err) {
            if (err) {
                console.log(' ');
            }
        });
    }
    static createVCF(data) {
        const contactInfo = header + `${data.nombre};;;\nFN:${data.nombre}\nTEL;CELL:${data.numero}` + footer;
        return contactInfo;
    }
    static moveFile() {
        fs_extra.move(src, dest, { overwrite: true }).then(() => console.log("El archivo lo encontrarás en la carpeta public con el nombre de contacts.vcf"))
            .catch((e) => console.log(' '));;
    }
    static renameFile(name, newName) {
        fs.rename(name, newName, function(err) {
            if (err) {
                console.log('ok');
            }
        });
    }
}

module.exports = fileService;