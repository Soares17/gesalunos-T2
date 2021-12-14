const express = require('express')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const app = express()


//define caminho para a pasta pública do projeto
app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))


app.use(cors())
app.use((req,res,next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

//define as rotas possíveis 
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
app.use('/utilizador',require('./routes/inserirutilizadorRoute'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, './public/fotos')
    },
    filename: (req,file,callback)=>{
        callback(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
})


const port = 5000 
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})