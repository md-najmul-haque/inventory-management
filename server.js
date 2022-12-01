import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import app from './app.js'
import colors from 'colors'

//Database connection 
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connection is successful'.blue.bold)
})

// server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`.red.bold);
})