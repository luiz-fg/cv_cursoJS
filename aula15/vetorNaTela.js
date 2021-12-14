let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log('exibindo conteudo do vetor usando for')
for(let pos = 0; pos < valores.length; pos++)
{
    if(valores[pos] < 10)
    {
        console.log(`0${valores[pos]}`)
    }
    else
    {
        console.log(`${valores[pos]}`)
    }
}

console.log('exibindo conteudo do vetor usando for IN')
for(let pos in valores)
{
    if(valores[pos] < 10)
    {
        console.log(`V: 0${valores[pos]}`)
    }
    else
    {
        console.log(`V: ${valores[pos]}`)
    }
}