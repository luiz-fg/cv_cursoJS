function contar()
{
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resp = document.getElementById('resp')
    
    let i, f, p

    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        resp.innerHTML = `Impossivel contar`
    }
    else{
        resp.innerHTML = ""
        
        for(x = i; x <= f; x += p)
        {
            resp.innerHTML += `${x} `
        }

        /* lógica usando formula de progressão aritmética - contribuição da Priscila
        let x = ((f - i) / p ) + 1
        for (a = 1; a <= x; a++)
        {
            resp.innerHTML += `${i + (a - 1) * p } `
        }
        */


    }
}

