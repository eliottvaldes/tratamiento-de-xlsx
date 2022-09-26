const fs = require('fs');
const fs_extra = require('fs-extra');
const header = 'BEGIN:VCARD\nVERSION:2.1\n'
const footer = '\nEND:VCARD\n'
const src = "Contacts.vcf";
const dest = "./public/Contacts.vcf"

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
                console.log(err);
            }
        });
    }

    static deleteFile(name) {
        fs.unlink(name, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
    static createVCF(data) {
        const contactInfo = header + `N:${data.nombre};Tmp;;;\nFN:Tmp ${data.nombre}\nTEL;CELL:${data.numero}\nTEL;CELL:${data.numero}` + footer;
        return contactInfo;
    }
    static moveFile() {
        fs_extra.move(src, dest, { overwrite: true }).then(() => console.log("El archivo lo encontrarás en la carpeta public con el nombre de contacts.vcf"))
            .catch((e) => console.log(e));;
    }
    static renameFile(name, newName) {
        fs.rename(name, newName, function(err) {
            if (err) {
                console.log('No se puede cambiar el nombre del archivo');
            }
        });
    }
}

module.exports = fileService;