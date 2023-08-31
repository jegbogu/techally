import connectDB from "../../../utils/connectmongo"
import Users from "../../../model/registerSchema"
import Recipients from "../../../model/reciepientSchema"
import mongoose from "mongoose"
const bcrypt = require('bcrypt')
const newRecipientID = require('../dashboardform/dashboardMW')




async function handler(req, res) {
    console.log(newRecipientID)
    if (req.method === 'POST') {
        try {

            const { username, password, use, company, companyName, } = req.body
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const foundUser = await Users.findOne({username:username})
            console.log(foundUser)

            if(foundUser){
                console.log('user already exist')
                res.status(403).json({message:'User with that Email already exist'})
                return;
            }else{
                const hashedPassword = await bcrypt.hash(password, 10)
                const doc = new Users({
                    _id: new mongoose.Types.ObjectId(),
                    username: username,
                    password: hashedPassword,
                    use: use,
                    company: company,
                    companyName: companyName,
                    
                    role: 'user',
                    active: true,
                    passport: 'none',
                    spaceOne: 'none',
                    space: 'none',
                    spaceTwo: 'none',
    
                })
                await doc.save()
                console.log(doc)
                res.json({ doc })
            }

            

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
