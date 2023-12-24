const express=require('express')
const ConnectToMongo=require('./database')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/archived',require('./router/ArchivedRouter'))
app.use('/api/deleted',require('./router/DeletedRouter'))
app.use('/api/notes',require('./router/NotesRouter'))
app.use('/api/starred',require('./router/StarredRouter'))
app.use('/api/user',require('./router/UserRouter'))

port=7000;
app.listen(port,()=>{
    console.log("app is listening to port"+port)
})

ConnectToMongo()