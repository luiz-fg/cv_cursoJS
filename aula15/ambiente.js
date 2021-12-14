let num = [5, 8, 2, 9, 3] 
console.log(` nosso vetor é: ${num}`)
console.log(num)

console.log(`tamanho do vetor: ${num.length}`)

console.log('O push adiciona um elemento ao vetor')
num.push(7)

console.log(num)

num.push(1)
num.push(10)
num.push(11)
num.push(12)

console.log(`o sort ordena o conteudo do vetor`)
num.sort(

    // resolvendo problema do 10 aparecer antes do 2 - Pois o array ordena interpretando
     // como se fosse uma string, logo para o js 10 vem antes de 2 
     // https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

    function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

});
console.log(num)



// nomeVetor[posição]

console.log('exibe o primeiro elemento do vetor')
console.log(num[0])

console.log('exibe o segundo elemento do vetor')
console.log(num[1])



console.log('exibindo conteudo do vetor usando for')
for(let i = 0; i < num.length; i++)
{
    if(num[i] < 10)
    {
        console.log(`0${num[i]}`)
    }
    else
    {
        console.log(`${num[i]}`)
    }
}


console.log('exibindo conteudo do vetor usando for IN')
for(let i in num)
{
    if(num[i] < 10)
    {
        console.log(`0${num[i]}`)
    }
    else
    {
        console.log(`${num[i]}`)
    }
}

console.log('traz o indice de vetor do valor especificado, se o valor não existir retorna -1.')
console.log(num.indexOf(7))