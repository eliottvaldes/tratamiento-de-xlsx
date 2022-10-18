class excellServices {
    static filterContacts(data) {
        const key1 = this.getJsonField(data);
        const contacts = data.map((item) => {
            return {
                nombre: item[key1[0]],
                numero: this.validateNumber(item[key1[1]]),
            }
        });
        return contacts;
    }
    static getJsonField(data) {
        return Object.keys(data[0]);
    }
    static validateNumber(number) {
        const numero = String(number);
        return numero.replace(/[^0-9]/g, '');
    }
    static getFileName(path) {
        return path.split('/').pop().split('.').shift();
    }
}

module.exports = excellServices;