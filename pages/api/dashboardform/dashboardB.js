import connectDB from "../../../utils/connectmongo"
import Birthdays from "../../../model/birthdaySchema"
import Users from "../../../model/registerSchema"





async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fullname,
                dob,
                username,
                phone,
                mtext,
                userID } = req.body

            console.log({
                fullname,
                dob,
                username,
                phone,
                mtext,
                userID
            })

            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')

            const doc = new Birthdays({

                fullname: fullname,
                dob: dob,
                username: username,
                phone: phone,
                mtext: mtext,
                userID: userID,
                
                spaceOne:'none',
                space:'none',
                spaceTwo:'none',
                

            })
            await doc.save()
            const user = await Users.findOne({ _id: userID })

            await user.populate('recipients')
              Users.findByIdAndUpdate(
                userID,
                { "$push": { "recipients": username } },

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
