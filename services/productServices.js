import Product from "../models/productSchema.js"

export const saveProductService = async (data) => {
    const product = new Product(data)
    const result = await product.save()
    return result
}

export const getProductService = async () => {
    const product = await Product.find({})
    return product;
}

export const updateProductService = async (productId, data) => {
    // const updateProduct = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    // update product by findById
    const product = await Product.findById(productId);
    const updateProduct = await product.set(data).save()


    return updateProduct;
}