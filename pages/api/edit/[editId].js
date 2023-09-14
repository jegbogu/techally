import connectDB from "../../../utils/connectmongo"
const Users = require('../../../model/registerSchema')
import Birthday from '../../../model/birthdaySchema'



async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB()
            const { editid } = req.query
            console.log(editid)
            const data = req.body
            const { fullname, dob, username, phone, mtext, userID } =data

            console.log({ fullname, dob, username, phone, mtext, userID })

            const user = await Birthday.findOneAndUpdate({ username: username, userID: { $in: [userID] } }, {
                $set: {
                    fullname: fullname,
                    dob: dob,
                    phone: phone,
                    mtext: mtext
                }
            })

            if (!user) {
                res.status(403).json({ message: 'not a user' })
                return
            }

            res.status(200).json({ message: 'Updated' })


        } catch (error) {
            console.log(error)
        }
    }
}

export default handler