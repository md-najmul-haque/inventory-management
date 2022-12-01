import express from 'express'
import { saveProduct } from "../../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route('/product').post(saveProduct)

export default productRoutes;