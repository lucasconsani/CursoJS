function verificar(){
    var age = document.getElementById('age')
    var sexo = document.getElementsByName('sexo')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var msg = document.getElementById('msg')
    var genero = ''
        if(sexo[0].checked){
            var genero = 'Homem'
            if(age.value >= 0 && age.value <= 5){
                img.setAttribute('src', 'h5a.jpg')
            }else if(age.value >= 6 && age.value <= 10){
                img.setAttribute('src', 'h10a.jpg')
            }else if(age.value >= 11 && age.value <= 14){
                img.setAttribute('src', 'h11a.jpg')
            }else if(age.value >= 15 && age.value <= 18){
                img.setAttribute('src', 'h17a.jpg')
            }          
        }else{
            var genero = 'Mulher'
            if(age.value >= 0 && age.value <= 5){
                img.setAttribute('src', 'm5a.jpg')
            }else if(age.value >= 6 && age.value <= 10){
                img.setAttribute('src', 'm10a.jpg')
            }else if(age.value >= 11 && age.value <= 14){
                img.setAttribute('src', 'm11a.jpg')
            }else if(age.value >= 15 && age.value <= 18){
                img.setAttribute('src', 'm16a.jpg')
            } 
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = (`Você é um(a) ${genero} de ${age.value} anos`)
        msg.appendChild(img)
    }