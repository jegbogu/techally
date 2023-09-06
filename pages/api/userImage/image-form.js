import connectDB from "../../../utils/connectmongo"
const Users = require('../../../model/registerSchema')






async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB()

 
            const { enteredImage, userID } = req.body
            

            const user = await Users.findOneAndUpdate({ _id: userID }, { $set: { passport: enteredImage } })

            res.status(200).json({message:'successfully uploaded, kindly logout and login to complete this process. Thanks'})
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler