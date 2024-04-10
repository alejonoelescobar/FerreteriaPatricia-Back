import CasaYJardin from "../../../models/CasaYJardin.js";

const editCasaYJardinItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { code, name, brand, cost, price, stock, classification, img } = req.body;
        const item = await CasaYJardin.findByIdAndUpdate(id, { code, name, brand, cost, price, stock, classification, img });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        return res.status(200).json({ message: "Item updated successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export default editCasaYJardinItem