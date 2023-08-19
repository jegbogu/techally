import connectDB from "../../../utils/connectmongo"
import Birthdays from "../../../model/birthdaySchema"
const Users = require('../../../model/registerSchema')






async function handler(req, res) {

    try {


        console.log('Connecting to Mongo')
        const db = await connectDB()
        console.log('Connected to Mongo')
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        const foundUsers = await Birthdays.find({})
        const foundUser = foundUsers.filter(e => e.dob === currentDate)
        const foundUsersArray = []
        // console.log(foundUser)
        for (let index = 0; index < foundUser.length; index++) {
            const clientId = foundUser[index].userID[0]
            const myClient = await Users.findById(clientId)

           

         const recipient =   [
                {
                    fullname: foundUser[index].fullname,
                    dob: foundUser[index].dob,
                    username: foundUser[index].username,
                    phone: foundUser[index].phone,
                    mtext: foundUser[index].mtext
                }
            ]
            
            const userInfo = [
                {
                    userEmail: myClient.username,
                    userCompany: myClient.companyName,
                    userMessage: myClient.message
                }
            ]
            function mergeArray(array1, array2) {
                        const mergedArray = { ...array1[0], ...array2[0] }
                        return mergedArray
                    }
                    const myData = mergeArray(recipient, userInfo)


            foundUsersArray.push(myData)

        }

        



        console.log(foundUsersArray)


        res.status(201).json({ foundUsersArray })



    } catch (error) {
        console.log(error)


    }




}

export default handler
