function contador(){
    var inic = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var msg = document.getElementById('msg')

    var i = Number(inic.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    msg.innerHTML = '🟢'
    if(i < f){
        for(var c = i; c <= f; c += p){
            msg.innerHTML += `${ c } 👉`
        }
    }else{
        for(var c = i; c >= f; c -= p){
            msg.innerHTML += `${ c } 👉`
        }
    }

    msg.innerHTML += '🏁'

    
}