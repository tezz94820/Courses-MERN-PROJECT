const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

//importing routes
const authRouter = require('./routes/authRoute')
const courseRouter = require('./routes/courseRoute')
const adminRouter = require('./routes/adminRoute')
const authenticateUser = require('./middlewares/authentication')
const authenticateAdmin = require('./middlewares/authenticateAdmin')
//importing database connection
const connectDB = require('./db/connect')


//parsing middleware
app.use(express.json())

//extra middlewares
app.use(cors())

//Route middlewares
app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/courses' , authenticateUser , courseRouter)
app.use('/api/v1/admin' , authenticateUser , authenticateAdmin ,  adminRouter)

//starting the server
const port = process.env.MONGO_PORT||5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen( port, () =>   console.log(`Listening on port ${port}`) )
    } catch (error) {
        console.log(error.message)
    }
}
start()