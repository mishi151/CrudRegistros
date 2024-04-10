import { Schema, model} from "mongoose";

const CompraSchema = new Schema({
    id_compra : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    fecha_compra : {
        type : String,
        required : true
    },
    total_compra : {
        type: Number,
        required : true
    }

},
{timestamps: true})

export default model("Compra", CompraSchema)