function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById("txtAno")
   var res = document.getElementById("res")
   if(fano.value.length ==0 ||fano.value >ano ){
       window.alert('Verifique os dados e tente novamente!')
   }else{
     var fsex =document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked ){
        genero = "Homem"
        if(idade>=0 && idade<=10){
            //crianca//
            img.setAttribute('src','menino.png')
        
         } else if(idade>10 && idade <50){
                //adulto
            img.setAttribute('src', 'homem.png')
            }else if(idade>=50 ){
                //velho//
            img.setAttribute('src', 'velho.png')
            }
        
    }else{
        genero ="Mulher"

        if (idade >= 0 && idade <= 10) {
            //crianca//
            img.setAttribute('src', 'menina.png')
        } else if (idade > 10 && idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher.png')
        } else if (idade >= 50) {
            //velho//
            img.setAttribute('src', 'velha.png')
        }

    }
    res.innerHTML =`Detectamos o genero ${genero}, com idade de ${idade} anos. `
    res.style.textAlign="center"
    res.appendChild(img)
   }
}