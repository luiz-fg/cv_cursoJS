let txt = document.getElementById('txt')
let img = document.getElementById('img')
let data = new Date()
let hora = data.getHours()

function horaDia()
{
    
    if(hora < 13 )
    {
           txt.innerHTML = `Agora são ${hora} horas.`
           img.src = '../hora-dia/img/manha.jpg'
           document.body.style.background = '#BDB76B'
           
    }
    else if (hora < 18)
    {
        txt.innerHTML = `Agora são ${hora} horas.`
        img.src = '../hora-dia/img/tarde.jpg'
        document.body.style.background = '#CD853F'
    }
    else if(hora < 23)
    {
        txt.innerHTML = `Agora são ${hora} horas.`
        img.src = '../hora-dia/img/noite.jpg'
        document.body.style.background = '#FF8C00'
    }
    else if( hora > 0 && hora < 6)
    {
        txt.innerHTML = `Agora são ${hora} horas.  É Madrugada!`
        document.body.style.background = '#363636'

    }
}

function zero(num)
{
 if(num < 10)
 {
     return `0${num}`
 }
 else
 {
     return Number(num)
 }
}