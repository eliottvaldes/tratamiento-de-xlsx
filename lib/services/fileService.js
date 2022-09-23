const fs = require('fs');
const fs_extra = require('fs-extra');
const header = 'BEGIN:VCARD\nVERSION:2.1\nN:;'
const footer = '\nEND:VCARD\n'
const src = "../controller/contacts.vcf";
const dest = "../../public/contacts.vcf"

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
            if (err) {}
        });
    }
    static createVCF(data) {
        const contactInfo = header + `${data.nombre};;;\nFN:${data.nombre}\nTEL;CELL:${data.numero}` + footer;
        return contactInfo;
    }
    static moveFile() {
        fs_extra.move(src, dest, { overwrite: true }).then(() => console.log("El archivo lo encontrarás en la carpeta public"))
            .catch((e) => console.log(e));;
    }
}

module.exports = fileService;