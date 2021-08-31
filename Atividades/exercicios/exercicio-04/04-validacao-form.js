function checkIsEmpty(fields) {
    const validFields = []

    for (let index = 0; index < fields.length; index++) {
        const value = fields[index].value;

        value.length === 0 ?
            validFields.push({ name: fields[index].name, status: false }) :
            validFields.push({ name: fields[index].name, status: true })

    }

    return validFields
}

function checkForm() {
    const name = document.formData.name;
    const birthdate = document.formData.birthdate;
    const cpf = document.formData.cpf;
    const register = document.formData.register;
    const email = document.formData.email;
    const phone = document.formData.phone;

    const validFields = checkIsEmpty([
        name,
        birthdate,
        cpf,
        register,
        email,
        phone
    ])

    validFields.forEach(field => {
        field.status === false ?
            document.getElementById(field.name).className = 'form-control border border-danger' :
            document.getElementById(field.name).className = 'form-control'
    })
}