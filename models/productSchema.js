import mongoose from "mongoose";

// mongoose patter, schema design => model create => query

// schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name for a product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 character,"],
        maxLength: [100, "Name is too large"]
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: [0, "price can't be negative"]
    },
    unit: {
        type: String,
        require: true,
        enum: {
            values: ["kg", "liter", "pcs"],
            message: "unit value can't be {value}, must be kg/liter/pcs"
        }
    },
    quantity: {
        type: Number,
        require: true,
        min: [0, "quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        message: true

    },
    status: {
        type: String,
        require: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status can't be {value}, must be in-stock / out-of-stock / discontinued"
        }
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now(),
    // },
    // updatedAt: {
    //     type: Data,
    //     default: Date.now(),
    // },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // categories: [{
    //     name: {
    //         type: String,
    //         require: true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    // }]

}, {
    timestamps: true
})

// create model
const Product = mongoose.model('Product', productSchema)

export default Product; 
