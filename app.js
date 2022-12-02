import express from "express";
import cors from 'cors'
import productRoutes from "./routes/v1/productRoutes.js";

const app = express();

//middleware 
app.use(cors());
app.use(express.json()) // to parse json file, we use it

app.use('/api/v1/product', productRoutes)

//root api
app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: "inventory management server is running"
    })
})

export default app;