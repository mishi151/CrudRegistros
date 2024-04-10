import express from 'express';
import comprasRouter from './routes/compras.routes.js';
import { mongoose } from 'mongoose';
import cors from 'cors'
const port = 3000;
const app = express();
app.use(express.json());

app.use(cors());
app.use('/apiCompra', comprasRouter)
app.get('/', (req, res) => {
    res.redirect('/apiCompra');
})
await mongoose.connect("mongodb://jose2:123@ac-gvfxj5l-shard-00-00.vgme3cx.mongodb.net:27017,ac-gvfxj5l-shard-00-01.vgme3cx.mongodb.net:27017,ac-gvfxj5l-shard-00-02.vgme3cx.mongodb.net:27017/?ssl=true&replicaSet=atlas-zgh66s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=api").then((data)=>console.log(`Conectado a la base de datos (${data.connection.name})`)).catch(e=>console.error(e))
app.listen(port, () => {
    console.log('Corriendo en el puerto 3000')
})