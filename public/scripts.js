
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
            `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op

        }
    })
    .catch( )
}











/*funções antigas, podem dar jeito :)*/
function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => processData(data))
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}
function processData(data) {
    const linhaCidade = document.getElementById('cidades')
    linhaCidade.innerHTML=''
    for(let i=0 ; i < 100; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let ID = data[i].ID
        linhaCidade.innerHTML += `<tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop}</td>
                                    <td>
                                    <button
                                        onclick="showID(${ID});"
                                        type="button" 
                                        class="btn btn-success"
                                        style="width:100px;"> Editar                                      
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger"
                                        style="width:100px;"> Eliminar
                                    </button>
                                    </td>
                                </tr>`
    }
}
function showID(ID){
    console.log(ID)
}