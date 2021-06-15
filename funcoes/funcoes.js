function parimp(n){
if (n%2==0){
    return('par')
    
}else{
    return('impar')
}

}
let res = parimp(11)  /*chamada*/

console.log(par) 
console.log(parimp(11))



function soma(n1=0,n2=0/*parametros opcionais p no numero nao ficar como string*/ ){
    return n1+n2
}
console.log(soma(2,5))


/*jogar uma funcao dentro de uma variavel*/

let f = function(x){
    return x*2

}
console.log(f(5))

/*calcular um fatorial de um numero    5!=5x4x3x2x1 */

function fatorial(n){
    let fat=1 
    for(let c=n ;c>1;c-- ) {
fat*=c
    }return fat
}
console.log(fatorial(5))
