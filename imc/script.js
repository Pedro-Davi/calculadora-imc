function calculate(){ 
    var weight = document.getElementById("weight")
    var height = document.getElementById("height")
    var response = document.getElementById("response")
    if (weight.value.length == 0 || height.value.length == 0){
        alert("[ERRO] Campo não preenchido")
    }else if (weight.value <= 0){
        alert("[ERRO] Preencha o campo de peso de forma correta")
    }else if (height.value <= 50){
      alert("[ERRO] Altura inválida, insira um valor acima de 50cm")
    }else{
        var imc = weight.value/(height.value/100)**2
        if (imc < 17){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está muito abaixo do peso`    
        }else if (imc >= 17 && imc <= 18){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está abaixo do peso`
        }else if (imc > 18 && imc <= 24.9){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e Seu peso está normal`
        }else if (imc > 24.9 && imc <= 29.9){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está acima do peso`
        }else if (imc > 29.9 && imc <= 34.9){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você possui obesidade grau I`
        }else if (imc > 34.9 && imc <= 40){
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você possui obesidade grau II`
        }else{
            response.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você possui obesidade grau III`
        }
    }
}