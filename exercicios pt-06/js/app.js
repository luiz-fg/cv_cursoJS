function tabuada()
{
    let num = document.getElementById('input-num')
    let tab = document.getElementById('select-tab')

    

    
    if(num.value.length == 0)
    {
        alert(`Digite um numero`)
    }
    else
    {
        tab.innerHTML = ``
        let n = Number(num.value)
        
        for(let c = 1; c <= 10; c++)
        {
            let item = document.createElement('option')
            item.text = `${zero(c)} x ${zero(n)} : ${zero(c*n)}`
            tab.appendChild(item)
        }
    }
}

function zero(numero)
{
    if(numero < 10)
    {
        return `0${numero}`
    }
    else
    {
        return numero
    }
}