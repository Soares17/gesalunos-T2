const express = require('express')
const path = require('path')
let cors = require('cors')
const multer = require('multer')
const app = express()


//define caminho para a pasta pública do projeto
app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use(cors())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept')
    next()
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

app.post('/util', (req,res) => {
    console.log(req.body)
    /*upload(req, res, (err)=>{
        console.log(req.files)
    })*/
})

const port = 5000 
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})