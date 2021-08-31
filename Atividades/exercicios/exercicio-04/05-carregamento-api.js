function loadData() {
    const { value } = document.formData.cep_form;
    console.log(value)

    const cepData = {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
    }

    fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((response) => response.json())
        .then(data => {
            for (const property in data) {
                
                document.getElementById(property) ? document.getElementById(property).innerHTML = `${property}: ${data[property]}` : ''
            }
        })
    
    for (const property in cepData) {
        //document.getElementById(property).innerHTML = cepData[property]
    }
}