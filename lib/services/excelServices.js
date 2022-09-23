class excellServices {
    static deleteDirtyData(data) {
        const cleanData = data.map((item) => {
            return {
                nombre: 'tmp' + item.Nombre,
                numero: item.Numero,
                pago: item.Pago,
                estacion: item.Estacion
            }
        });
        return cleanData;
    }
    static filterContacts(data) {
        const contacts = data.map((item) => {
            return {
                nombre: 'tmp' + item.Nombre,
                numero: item.Numero,
            }
        });
        return contacts;
    }
}

module.exports = excellServices;