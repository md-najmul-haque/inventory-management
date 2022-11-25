import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import colors from 'colors'
import app from './app.js'

//Database connection 
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connection is successful')
})

// server

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`.yellow.bold);
})