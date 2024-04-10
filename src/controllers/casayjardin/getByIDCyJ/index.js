import CasaYJardin from "../../../models/CasaYJardin.js";

const getByIDCasaYJardinItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await CasaYJardin.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        return res.status(200).json(item);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export default getByIDCasaYJardinItem;