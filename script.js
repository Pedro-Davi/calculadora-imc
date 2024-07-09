const form = document.getElementById('form')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const value = document.getElementById('value')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const imc = (weight.value /height.value**2).toFixed(2)
    let description = ''  

    document.getElementById('infos').classList.remove('hidden')
    document.getElementById('infos').classList.add('expand')
    
    tableImc(imc, description, value)

    value.textContent = imc.replace('.', ',')

    weight.value = ''
    height.value = ''
    weight.focus()
})

function tableImc(imc, description, value) {
    
    value.classList.add("attention")

    if (imc >= 18.6 && imc <24.9){
        value.classList.remove("attention")
        value.classList.add("normal")
    } 
    
    const table = [
        {
            condition: imc < 16,
            message: description = "Cuidado!!! Você possui magreza grave",
        },
        {
            condition: imc >= 16 && imc <= 16.9,
            message: description = "Cuidado!! Você possui Magreza moderada.",
        },
        {
            condition: imc >= 17 && imc <= 18.5,
            message: description = "Cuidado! Você possui Magreza leve",
        },
        {
            condition: imc >= 18.6 && imc <= 24.9,
            message: description = "Você está no Peso ideal.", 
        },
        {
            condition: imc >= 25 && imc <= 29.9,
            message: description = "Atenção! Você está com sobrepeso.", 
        },
        {
            condition: imc >= 30 && imc <= 34.9,
            message: description = "Cuidado! você possui obesidade grau I.", 
        },
        {
            condition: imc >= 35 && imc <= 39.9,
            message: description = "Cuidado!! Você possui obesidade grau II.",
        },
        {
            condition: imc >= 40,
            message: description = "CUIDADO!!! você possui obesidade mórbida.", 
        },
    ]

    for (const validator of table){
        if (validator.condition){
            description = validator.message
            document.getElementById('description').textContent = description
            return
        }
    }
}

