const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()


//define caminho para a pasta pública do projeto
app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

//define as rotas possíveis 
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
app.use('/utilizador',require('./routes/inserirutilizadorRoute'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

//***************************************** */

const storage = multer.diskStorage({
    //define onde e com que nome a imagem é guardada
    destination: (req,file,callback)=>{
        callback(null, './public/uploads')
    },
    filename: (req,file,callback)=>{
        callback(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single('image')

app.post('/foto',(req, res) => {
    upload(req, res, (err)=>{
        console.log(req.body.nomeutilizador)
        if(err){
            res.json({res: err})
        } else {
            if(req.file == undefined){
              res.json({res:'No file selected'})
            }
            else{
                console.log(req.file)
                res.json({res:'Sucesso!'})
            }           
        }
    })  
  });
/*************************************************/
const port = 5000 
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})