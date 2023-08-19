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
                userID: userID
            })
            await doc.save()
            const user = await Users.findOne({ _id: userID })

            await user.populate('birthdays')
            const date = new Date();
            let currentDay = String(date.getDate()).padStart(2, '0');

            let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

            let currentYear = date.getFullYear();

            // we will display the date as DD-MM-YYYY 

            let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

            
           


            res.json({ doc })

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
