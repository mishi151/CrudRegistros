import { Router } from "express";
import Registro from "../model/Registro.js"

//Enrutador de Express para redirigir y crear las rutas del API
const router = Router()

//Obtiene todos los registros guardados en la base de datos
router.get("/", async (req, res) => {
    const RegistroFinded = await Registro.find()
    res.status(200).json({
        msg: 'Status 200 - Ok',
        Registros: RegistroFinded
    })
});

//Obtiene un registro con el parametro ID
router.get("/:id", async (req, res) => {
    const RegistroFinded = await Registro.findById(req.params.id)
    res.status(200).json({
        msg: 'Status 200 - Ok',
        Registro: RegistroFinded
    })
});

//Crea un nuevo documento en la base de datos con los atributos que se reciben a través del body
router.post("/", async (req, res) => {
    try {
        const {id_factura, id_alquiler, id_cliente, id_vendedor, precio_base} = req.body
        const descuento = precio_base * 0.05
        const precio_total = precio_base - descuento
        const RegistroCreated = new Registro({id_factura, id_alquiler, id_cliente, id_vendedor, precio_base, descuento, precio_total})
        await RegistroCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'Registro creado correctamente',
            Registro: RegistroCreated
        })
    } catch (e) {
        res.status(401).json({error: e})
    }
});



//Actualiza el registro con el parametro ID, y con los atributos que recibe a través del body
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {id_factura, id_alquiler, id_cliente, id_vendedor, precio_base} = req.body
        const descuento = precio_base * 0.05
        const precio_total = precio_base - descuento
        const RegistroBefore = await Registro.findByIdAndUpdate(id, {id_factura, id_alquiler, id_cliente, id_vendedor, precio_base, descuento, precio_total})
        const RegistroAfter = await Registro.findById(id)
        res.json({
            msg: 'Registro actualizado con éxito',
            RegistroBefore,
            RegistroAfter
        });
    } catch (e) {
        res.status(401).json({error: e})
    }

});

//Elimina un registro de la base de datos con el id que recibe de los parametros
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const RegistroDeleted = await Registro.findByIdAndDelete(id)
        res.json({
            msg: 'Registro borrado con éxito',
            Registro: RegistroDeleted
        });
    } catch (e) {
        res.status(401).json({ error: e })
    }
});

//exporta todo el enrutador por defecto para usar las rutas en otros archivos
export default router