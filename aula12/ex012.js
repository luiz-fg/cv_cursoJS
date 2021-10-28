var agora = new Date()
var hora = `${agora.getHours()}h : ${agora.getMinutes()}m : ${agora.getSeconds()}s` 
console.log(`Agora são exatamente ${hora}`)

if(hora < 12)
{
  console.log(`Bom dia`)
}
else if(hora < 19)
{
  console.log(`Boa tarde`)
}
else
{
  console.log(`Boa noite`)
}

