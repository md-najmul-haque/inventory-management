import Product from "../models/productSchema.js"

export const saveProductServices = async (data) => {
    const product = new Product(data)
    const result = await product.save()
    return result
}

export const getProductServices = async () => {
    const product = await Product.find({})
    return product;
}