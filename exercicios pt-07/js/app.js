let num = document.getElementById('input-num')
let tab = document.getElementById('select-tab')
let res = document.querySelector('div.res')

let valores = []

function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }

}

function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }

}

function adicionar()
{
    if(isNumero(num.value) && !inLista(num.value, valores))
    {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Adicionado ${zero(num.value)}`
        tab.appendChild(item)
        res.innerHTML = ''
        
    }
    else
    {
        alert(`Número inválido ou já consta na lista`)
    }
    num.value = ""
    num.focus()
    
}

function zero(n)
{
    if(n < 10 && Number.isInteger(n)) return `0${n}`
    else return n
}

function operacoes()
{
    if(valores.length === 0)
    {
        alert(`Sem elementos.\nAdicione valores antes de finalizar!`)
        
    }
    else
    {
        res.innerHTML = ''
        let soma, media, maior, menor, total

        total = valores.length
        soma = valores.reduce(function(soma, i){
            return soma + i
        });

        maior = valores.reduce(function(a, b){
            return Math.max(a,b)
        });

        menor = valores.reduce(function(a, b){
            return Math.min(a,b)
        });

        media = soma / total

        

    res.innerHTML += `<p>Elementos: <strong>${zero(total)}</strong></p>`
    res.innerHTML += `<p>Soma: <strong>${zero(soma)}</strong>     Média: <strong>${zero(media)}</strong></p>`
    res.innerHTML += `<p>Maior: <strong>${zero(maior)}</strong>     Menor: <strong>${zero(menor)}</strong> </p>`
    
    }
    num.focus()
}