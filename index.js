const express = require('express')
const path = require('path')
const app = express()


//define caminho para a pasta pública do projeto
app.use(express.static('./public'))

//define as rotas possíveis
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

const port =3000 
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})