import Pintura from "../../../models/Pintura.js";

const createPinturaItem = async (req, res) => {
    try {
        const { code, name, color, brand, cost, price, stock, img } = req.body;
        const item = new Pintura({
            code,
            name,
            color,
            brand,
            cost,
            price,
            stock,
        });
        await item.save();
        return res.status(201).json({
            msg: "Item created successfully",
        })
    } catch (error) {
        return res.status(400).json({
            msg: error.message,
        });
    }
}

export default createPinturaItem