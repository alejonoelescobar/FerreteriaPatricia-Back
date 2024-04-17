import CasaYJardin from "../../../models/CasaYJardin.js";
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ dest: 'uploads/' });

const createCasaYJardinItem = async (req, res) => {
  try {

    const { code, name, brand, cost, price, stock, classification, img } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);

    const item = new CasaYJardin({
      code,
      name,
      brand,
      cost,
      price,
      stock,
      classification,
      img: result.secure_url
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