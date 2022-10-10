class excellServices {
    static filterContacts(data) {
        const contacts = data.map((item) => {
            return {
                nombre: item.Nombre,
                numero: item.Numero,
            }
        });
        return contacts;
    }
}

module.exports = excellServices;