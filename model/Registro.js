//Importación del Schema y del model desde mongoose
import { Schema, model} from "mongoose";

//Schema para enviar datos a la base de datos
const RegistroSchema = new Schema({
    id_factura : {
        type : Number,
        required : true,
        trim : true,
        unique : true
    },
    id_alquiler : {
        type : Number,
        required : true,
        trim : true
    },
    id_cliente : {
        type : Number,
        required : true,
        trim : true
    },
    id_vendedor : {
        type : Number,
        required : true,
        trim : true
    },
    precio_base : {
        type : String,
        required : true
    },
    descuento : {
        type: Number,
        required : true
    },
    precio_total : {
        type: Number,
        required : true
    }

},
//Marcas de tiempo
{timestamps: true})

//Exportación del modelo por defecto
export default model("Registro", RegistroSchema)