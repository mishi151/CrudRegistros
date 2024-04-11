import express from 'express';
import RegistrosRouter from './routes/registros.routes.js';
import { mongoose } from 'mongoose';
import cors from 'cors'
const port = 3000;
const app = express();
app.use(express.json());

app.use(cors());
app.use('/apiRegistros', RegistrosRouter)
app.get('/', (req, res) => {
    res.redirect('/apiRegistros');
})
await mongoose.connect("mongodb://mishell:123@ac-i4x9hwh-shard-00-00.hvt3vca.mongodb.net:27017,ac-i4x9hwh-shard-00-01.hvt3vca.mongodb.net:27017,ac-i4x9hwh-shard-00-02.hvt3vca.mongodb.net:27017/RegistrosMishell?ssl=true&replicaSet=atlas-d5oaf2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0").then((data)=>console.log(`Conectado a la base de datos (${data.connection.name})`)).catch(e=>console.error(e))
app.listen(port, () => {
    console.log('Corriendo en el puerto 3000')
})