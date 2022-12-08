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

    // const updateProduct = await Product.updateOne({ _id: productId }, { $inc: data }, { runValidators: true })

    // update product by findById
    const product = await Product.findById(productId);
    const updateProduct = await product.set(data).save()


    return updateProduct;
}

export const bulkUpdateProductService = async (Ids, data) => {
    const result = await Product.updateMany({ _id: data.ids }, data, { runValidators: true })
    return result;
}