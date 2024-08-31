const express = require ('express');
const AuthRouter = require('./src/routes/auth.routes');
 

const app = express();

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth',AuthRouter)
app.use ('/',(req,res) => {
    
})

const port = 3000

app.listen(port, () =>{
    console.log(`app Listening http://localhost:${port}`)
})