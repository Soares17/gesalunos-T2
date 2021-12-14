
function init(){
   getNavbar()
   getTipos()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:5000/navbar')
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
    fetch('http://localhost:5000/formdata')
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
    const tipo = document.getElementById('tipo').value
    if(tipo=='')
        alert('Tem de indicar um tipo')
    else
        console.log(tipo)

    //criar objeto com os dados recolhidos no form
    let dadosutilizador = {
        nomeutilizador : nome,
        moradarua : morada_rua,
        moradanumero : morada_num,
        datanascimento: dnasc,
        telemovel: telem,
        email: email,
        idtipo : tipo
    }

    //criar um JSON do objeto
    let jsonDados = JSON.stringify(dadosutilizador)

    //preparar o pedido
    const options = {
        method: 'POST',
        headers: {
            'Accept' : 'application/json'
        },
        //mode: 'cors',
        body: jsonDados
    }

    fetch('http://localhost:5000/utilizador', options)
    .then(res => res.json())
    .then(response => alert(response.text))
    .catch((err) => {
        alert(err)
    })
    
}


function sendImage(){
    const image = document.getElementById('foto').files[0]
    let imageData = new FormData()
    imageData.append('image', 'image')
    if(image==undefined){
        alert('Não há imagem selecionada!')
    }
    else {
        let options = {
            method: 'POST',
            headers: {
                'Accept':'application/json'
            },
            mode: 'cors',
            body: imageData
        }
        fetch('http://localhost:3000/utilizador', options)
        .then(res => res.json())
        .then(data => alert(data.message))
        .catch((err)=>{
            alert(err)
        })
    }
}











