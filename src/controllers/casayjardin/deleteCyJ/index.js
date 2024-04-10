import CasaYJardin from "../../../models/CasaYJardin.js";

const deleteCasaYJardinItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await CasaYJardin.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        return res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default deleteCasaYJardinItem