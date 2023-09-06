import connectDB from "../../../utils/connectmongo"
import Recipient from "../../../model/reciepientSchema"
import Users from "../../../model/registerSchema"





async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {startDate,endDate,checked,fullname, email, phone, mtext, userID } = req.body
            console.log({startDate,endDate,checked,fullname, email, phone, mtext, userID })

            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            // searching if user has already been registerd using email
         const foundUser =   await Users.findOne({_id:userID})
         if(foundUser.recipients.includes(email)){
            console.log('rejected')
            res.status(403).json({message:'User has already been registered by You'})
            return
         }
        

            const doc = new Recipient({
                startDate:startDate,
              
                endDate:endDate,
                checked:checked,
                fullname: fullname,
                email: email,
                phone: phone,
                mtext: mtext,
                
                spaceOne:'none',
                space:'none',
                spaceTwo:'none',
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
        
        Users.findByIdAndUpdate(
            userID,
            { "$push": { "recipients": email } },

            { "new": true, "upsert": true },


        ).then(function (err, managerparent) {
            if (err) throw err;
            console.log(managerparent);
        })

            res.json({ doc })

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
