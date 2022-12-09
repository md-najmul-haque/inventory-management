import express from 'express'
import { saveProduct, getProduct, updateProduct, bulkUpdateProduct, deleteProductById } from "../../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route('/').post(saveProduct).get(getProduct)

// this route must be call at the top of single product update dynamic route. 
productRoutes.route('/bulk-update').patch(bulkUpdateProduct)
productRoutes.route('/:id').patch(updateProduct).delete(deleteProductById)

export default productRoutes;