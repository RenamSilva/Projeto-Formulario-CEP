const cep = document.getElementById("cep")
const logradouro = document.getElementById("cep")

cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value
    let search = cep.value.replace("-", "")
    var regex = /\d{5}-?\d{3}/g

    if (Cep.match(regex)) {
        document.getElementById("cep").classList.remove("red-input")
        document.getElementById("cep").classList.add("green-input")
    } else {
        document.getElementById("erro").style.display = "block"
        document.getElementById("cep").classList.add("red-input")
        return false;
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
        response.json().then(data => {
            if (data.erro) {
                document.getElementById("cep").classList.remove("green-input")
                document.getElementById("erro").style.display = "block"
                document.getElementById("cep").classList.add("red-input")
            } else {
                console.log(data)
                document.getElementById("logradouro").value = data.logradouro
                document.getElementById("bairro").value = data.bairro
                document.getElementById("localidade").value = data.localidade
                document.getElementById("uf").value = data.uf
                document.getElementById("ibge").value = data.ibge
                document.getElementById("ddd").value = data.ddd
            }
        })
    })
})

