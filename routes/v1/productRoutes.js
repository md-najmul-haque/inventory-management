import express from 'express'
import { saveProduct, getProduct } from "../../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route('/product').post(saveProduct).get(getProduct)

export default productRoutes;