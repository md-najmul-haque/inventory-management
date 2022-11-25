import express from "express";
import cors from 'cors'

const app = express();

//middleware 
app.use(cors());
app.use(express.json()) // to parse json file, we use it

//root api
app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: "inventory management server is running"
    })
})

export default app;