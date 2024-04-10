import CasaYJardin from "../../../models/CasaYJardin.js";

const getCasaYJardinItems = async ( req, res) => {
    try {
        const items = await CasaYJardin.find();
        return res.status(200).json(items);
    } catch (error) {
       return res.status(500).json({ message: error.message }) 
    }
}

export default getCasaYJardinItems; 