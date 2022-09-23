const fs = require('fs');
const header = 'BEGIN:VCARD\nVERSION:2.1\nN:;'
const footer = '\nEND:VCARD\n'


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
        const contactInfo = header + `${data.nombre};;;\nFN:${data.nombre}\nTEL;CELL:${data.numero}` + footer;
        return contactInfo;
    }
}

module.exports = fileService;