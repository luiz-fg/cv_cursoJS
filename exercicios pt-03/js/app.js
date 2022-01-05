




function checaIdade()
{
    let nascimento = document.getElementById('nascimento')
    let sexo = document.getElementsByName('radSex')
    let res = document.querySelector('div.res')

    let data = new Date()
    let anoAtual = data.getFullYear()
    let idade
    let genero
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    

    if(nascimento.value.length == 0)
    {
        res.innerHTML = `ERRO... <br>Data de nascimento não pode estar em branco.`
    }
    else if( nascimento.value > anoAtual)
    {
        res.innerHTML = `ERRO... <br>Nascimento não pode ser maior que ${anoAtual}`
    }
    else
    {
        idade = anoAtual - nascimento.value

        if(sexo[0].checked)
        {
            genero = "Homem"

            if(idade < 10)
            {
                img.setAttribute('src', '/exercicios pt-03/img/menino.jpg')
            }
            else if(idade < 21)
            {
                img.setAttribute('src','/exercicios pt-03/img/garoto.jpg')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', '/exercicios pt-03/img/homem.jpg')
            }
            else
            {
                img.setAttribute('src', '/exercicios pt-03/img/idoso.jpg')
            }
        }
        else if(sexo[1].checked)
        {
            genero = "Mulher"

            if(idade < 10)
            {
                img.setAttribute('src', '/exercicios pt-03/img/menina.jpg')
            }
            else if(idade < 21)
            {
                img.setAttribute('src','/exercicios pt-03/img/garota.jpg')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', '/exercicios pt-03/img/mulher.jpg')
            }
            else
            {
                img.setAttribute('src', '/exercicios pt-03/img/idosa.jpg')
            }
        }

        res.innerHTML = ` ${genero} com ${zero(idade)} anos!`
        res.appendChild(img)

        

 
    }

    
}

function zero(num)
{
    return  (num < 10)  ?   `0${num}` : num
}