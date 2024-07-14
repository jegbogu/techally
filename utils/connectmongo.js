require('dotenv').config()
const mongoose = require('mongoose')

const fs = require('fs')
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const milliseconds = today.getMilliseconds();

// Format the date as a string
const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds.toString().padStart(7, '0')}`;
console.log(formattedDate)



const dbLink = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.wexsqrp.mongodb.net/${process.env.DB}`
 

const connectDB = async ()=>{
    try {
        await mongoose.connect(dbLink,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongoDB is connected ---- Successfully')
    } catch (error) {
        console.log(error)
        const log = `{logtimeStamp: ${formattedDate}, application:joerally, ${error}}`
        fs.writeFileSync('error.log',log)
        process.exit(1)
    }
    
}

export default connectDB