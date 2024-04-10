import Pintura from "../../../models/Pintura";

const getAllPinturaItems = async (req, res) => {
    try {
        const items = await Pintura.find();
        if (items.length === 0) {
            return res.status(404).json({ message: "No items found" });
        }
        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default getAllPinturaItems;