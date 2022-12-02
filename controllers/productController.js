import { getProductService, saveProductService, updateProductService } from "../services/productServices.js"

export const saveProduct = async (req, res, next) => {
    // there have two ways of save data in backend, one is save another one is create

    try {
        //create
        // const result = await Product.create(req.body)

        // save
        // const product = new Product(req.body)

        // if we use save method then we can validate like this way
        // if (product.quantity === 0) {
        //     product.status = 'out-of-stock'

        // }
        // const result = await product.save()

        const result = await saveProductService(req.body)

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
        // or operator used in find method
        // const result = await Product.find({ $or: [{ _id: "6388d1571de1789cd3666a07" }, { name: "sfdkf" }] })

        // ne (not equal) operator used in find method
        // const result = await Product.find({ status: { $ne: "out-of-stock" } })

        // gt (greater that) / gte(greater that or equal) operator used in find method
        // const result = await Product.find({ quantity: { $gt: 100 } })
        // const result = await Product.find({ quantity: { $gte: 100 } })

        // in operator used in find method
        // const result = await Product.find({ name: { $in: ['rice', 'dal'] } })

        // get only specific property
        // const result = await Product.find({}, 'name quantity')

        // if we want to remove some special property
        // const result = await Product.find({}, '-name -quantity')


        // if we want to remove some special property and limit it
        // const result = await Product.find({}, '-name -quantity').limit(1)

        // if we want to sort by descending order
        // const result = await Product.find({}).sort({ quantity: -1 })

        // query builders in mongoose

        // const result = await Product.find({}).where("name").equals("rice").where("quantity").gt(100).lt(600)
        // const result = await Product.find({})
        //     .where("name").equals(/\w/)
        //     .where("quantity").gt(100).lt(600)
        //     .limit(2).sort({ quantity: -1 })


        //find by id
        // const result = await Product.findById('6388d1571de1789cd3666a07')

        // const result = await Product.findById(undefined) // data load successfully empty data
        // const result = await Product.find(undefined) // data load successfully all data

        const result = await getProductService()

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

export const updateProduct = async (req, res, next) => {
    try {

        const { id } = req.params

        const result = await updateProductService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'Data updated successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to update data',
            error: error.message
        })
    }
}