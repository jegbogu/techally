import connectDB from "../../../utils/connectmongo"
import Recipient from "../../../model/reciepientSchema"
import Users from "../../../model/registerSchema"





async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {startDate,startTime,endDate,checked,fullname, email, phone, mtext, userID } = req.body
            console.log({startDate,startTime,endDate,checked,fullname, email, phone, mtext, userID })

            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')

            const doc = new Recipient({
                startDate:startDate,
                startTime:startTime,
                endDate:endDate,
                checked:checked,
                fullname: fullname,
                email: email,
                phone: phone,
                mtext: mtext,
                userID: userID
            })
            await doc.save()
             const user = await Users.findOne({_id:userID})
            
             await user.populate('recipients')

            //  const userIn = await Users.findOne({_id:userID})
            //  console.log('this is the user')
              
             
            //  userIn.recipients.push(doc._id)
              
            //  console.log(userIn)

            //  const User = new Users({
            //     _id:userID  ,
                 
            // })
            // const rec = await Recipient.findOne({_id:doc._id}).populate('')

            // await User.save()
            // const newRecipientID = doc._id


        //   module.exports = newRecipientID
        //   console.log(newRecipientID)
        //   const recipient = Recipient.findOne({_id:newRecipientID})
        
       
            res.json({ doc })

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
