import Product from "../models/productSchema.js"

export const saveProduct = async (req, res, next) => {
    // there have two ways of save data in backend, one is save another one is create

    try {
        //create
        // const result = await Product.create(req.body)

        // save
        const product = new Product(req.body)

        // if we use save method then we can validate like this way
        // if (product.quantity === 0) {
        //     product.status = 'out-of-stock'

        // }
        const result = await product.save()
        result.logger()


        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to insert data',
            error: error.message
        })
    }

}

export const getProduct = async (req, res, next) => {
    try {
        const result = await Product.find()

        res.status(200).json({
            status: 'success',
            message: 'Data load successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to load data',
            error: error.message
        })

    }
}