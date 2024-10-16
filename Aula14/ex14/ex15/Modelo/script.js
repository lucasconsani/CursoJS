function tabuada(){
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var lista = document.getElementById('lista')
    
    lista.innerHTML = ''
    for(var c = 1; c <= 10; c++){
        var s = n * c
        var opt = document.createElement('option')
        opt.setAttribute('value', `${c}`)
        opt.setAttribute('name', `${c}`)
        opt.innerHTML += `${n} x ${c} =  ${s}`
        lista.appendChild(opt)
    }
}