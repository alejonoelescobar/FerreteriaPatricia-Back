import CasaYJardin from "../../../models/CasaYJardin.js";

const createCasaYJardinItem = async (req, res) => {
  try {
    const { code, name, brand, cost, price, stock, classification, img } = req.body;
    const item = new CasaYJardin({
      code,
      name,
      brand,
      cost,
      price,
      stock,
      classification,
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
};

export default createCasaYJardinItem;