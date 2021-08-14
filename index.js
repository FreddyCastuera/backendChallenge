//inicialice
//server
//conexion a la base de datos
const server = require('./src/server.js');

const dbConnect = require('./src/lib/db.js')

dbConnect()
    .then(()=>{
        console.log('Database connected');
        server.listen(3021,()=>{
            console.log('server listening on 8085');
        })
    })
    .catch(err=>console.log(err))
