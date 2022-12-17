import Product from "../models/productSchema.js"

export const saveProductService = async (data) => {
    const product = new Product(data)
    const result = await product.save()
    return result
}

export const getProductService = async (filters, queries) => {
    const product = await Product.find(filters)
        .select(queries.fields)
        .sort(queries.sortBy) // since query data comes as a object. so are not using {} inside find method
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

export const bulkUpdateProductService = async (data) => {
    // const result = await Product.updateMany({ _id: data.ids }, data.data, { runValidators: true })

    const products = [];

    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data)) // we can't use await inside loop because forEach synchronous function.

    })
    const result = await Promise.all(products)
    return result;

}

export const deleteProductByIdService = async (id) => {
    const result = Product.deleteOne({ _id: id })
    return result;

}

export const bulkDeleteProductService = async (ids) => {
    const result = await Product.deleteMany({ _id: ids }, { runValidators: true })

    return result;

}