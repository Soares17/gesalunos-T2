
function init(){
   getNavbar()
   getTipos()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>[
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getTipos(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.length; i++){
            const op = 
            `<option value="${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op
        }
    })
    .catch()
}

function getData(){
    const nome = document.getElementById('nome').value
    if(nome=='')
        alert('Tem de preencher o nome.')

    const morada_rua = document.getElementById('morada_rua').value
    if(morada_rua=='')
        alert('Tem de preencher a rua.')

    const morada_num = document.getElementById('morada_num').value
    if(morada_num=='')
        alert('Tem de preencher o número.')

    const dnasc = document.getElementById('dnasc').value
    if(dnasc=='')
        alert('Tem de indicar uma data de nascimento.')
    
    const email = document.getElementById('email').value
    if(email=='')
        alert('Tem de indicar um email.')

    const telem = document.getElementById('telem').value
    if(telem=='')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
        for(i; i<telem.length; i++){
            let c = telem.charAt(i)
            console.log(c)
            if(isNaN(c)){
                console.log('número inválido')
                break
            }       
        }
        console.log(i)
        if(i == telem.length){
            const telemInt = parseInt(telem)
            console.log(telemInt)
        }
    }

    const tipo = document.getElementById('tipo').innerHTML
    if(tipo=='')
        alert('Tem de indicar um tipo')
}











