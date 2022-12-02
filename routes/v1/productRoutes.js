import express from 'express'
import { saveProduct, getProduct, updateProduct } from "../../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route('/').post(saveProduct).get(getProduct)
productRoutes.route('/:id').patch(updateProduct)

export default productRoutes;