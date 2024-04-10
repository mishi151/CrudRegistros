import { Router } from "express";
import Compra from "../model/Compra.js"

const router = Router()

//Get
router.get("/", async (req, res) => {
    const compraFinded = await Compra.find()
    res.status(200).json({
        msg: 'Status 200 - Ok',
        compras: compraFinded
    })
});

//GetOne
router.get("/:id", async (req, res) => {
    const compraFinded = await Compra.findById(req.params.id)
    res.status(200).json({
        msg: 'Status 200 - Ok',
        compra: compraFinded
    })
});

//Post
router.post("/", async (req, res) => {
    try {
        const compraCreated = new Compra(req.body)
        await compraCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'Compra creado correctamente',
            compra: compraCreated
        })
    } catch (e) {
        res.status(401).json({error: e})
    }
});

//Update - Put
router.put("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const compraBefore = await Compra.findByIdAndUpdate(id, req.body)
        const compraAfter = await Compra.findById(id)
        res.json({
            msg: 'Compra actualizado con éxito',
            compraBefore,
            compraAfter
        });
    } catch (e) {
        res.status(401).json({error: e})
    }

});

//Delete
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const compraDeleted = await Compra.findByIdAndDelete(id)
        res.json({
            msg: 'Compra borrada con éxito',
            compra: compraDeleted
        });
    } catch (e) {
        res.status(401).json({ error: e })
    }
});

export default router