class excellServices {
    static filterContacts(data) {
        const key1 = this.getJsonField(data);
        const contacts = data.map((item) => {
            return {
                nombre: item[key1[0]],
                numero: item[key1[1]],
            }
        });
        return contacts;
    }
    static getJsonField(data) {
        return Object.keys(data[0]);
    }
}

module.exports = excellServices;