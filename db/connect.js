const { default: mongoose } = require("mongoose")

const connectionString = 
'mongodb+srv://roshah07:1234@cluster0.lgzhj6b.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) =>{
    return mongoose.connect(connectionString)
}

module.exports = connectDB