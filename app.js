import express from 'express'
import config from './config.js'
import emailRouter from './src/routes/emailRoutes.js'


const app=express()
const port = config.port;
app.use(express.json())
app.use('/api',emailRouter)



app.listen(port,()=>{
    console.log("Server started ",port),
    console.log("Api key : " ,config.openAiKey)
})