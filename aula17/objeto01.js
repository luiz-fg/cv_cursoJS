let amigo = {nome: 'josé', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }}
console.log(typeof amigo)
console.log(`O ${amigo.nome} pesa ${amigo.peso} Kg.`)
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso} Kg.`)
