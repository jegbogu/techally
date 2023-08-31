import connectDB from "../utils/connectmongo"
import Recipients from '../model/reciepientSchema'
import Users from '../model/registerSchema'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from "react";

function WMsettings(props) {
    const form = useRef()
    console.log(props.foundUsersArray.length)
    const [fullname, SetFullname] = useState('')
    const [userCompany, SetUserCompany] = useState('')
    const [userEmail, SetUserEmail] = useState(' ')
    const [username, SetUsername] = useState('')
    const [phone, SetPhone] = useState('')
    const [mtext, SetMtext] = useState('')


    const allUsers = [...props.foundUsersArray];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
    
         // Check if the current time is between 9:00 AM and 9:50 PM (9:00 to 9:50)
         if (currentHour === 9 && currentMinute >= 0 && currentMinute <= 50) {
            const intervalId = setInterval(() => {
                if (currentIndex < allUsers.length) {
                    SetFullname(allUsers[currentIndex].fullname);
                    SetUserCompany(allUsers[currentIndex].userCompany);
                    SetUserEmail(allUsers[currentIndex].userEmail);
                    SetUsername(allUsers[currentIndex].username);
                    SetPhone(allUsers[currentIndex].phone);
                    SetMtext(allUsers[currentIndex].mtext);
                    setCurrentIndex(currentIndex + 1);
                    setTimeout(() => {
                        submitHandler();
                    }, 30000);
                }
            }, 60000); // 60 seconds
    
            return () => {
                clearInterval(intervalId); // Clear the interval when the component unmounts
            };
        } else {
            // If it's not between 5:00 PM and 5:15 PM, do nothing
            return () => {};
        }
    }, [currentIndex]);
    






    async function submitHandler(event) {


        // using Email.js to send Aumatic Dynamic emails
        function display() {
            console.log(form.current)

        }
        display()
        // emailjs.sendForm('service_f1x6cbs',"template_mt6vbhs",  form.current, 'or6O6zejdIMnsxvYi')
        //     .then((result) => {
        //         console.log(result.text);

        //         // alert('message successfully sent ')
        //         // event.target.reset()
        //     }, (error) => {
        //         console.log(error.text);
        //     });


    }

    return (
        <div>
            <React.StrictMode>
                <div>
                    <h3>Database</h3>
                    <h1>Register a New Recipient for Weekly or Montly email</h1>


                    <div>
                        <form ref={form} onSubmit={submitHandler} >
                            <div>
                                <label htmlFor="fullname">Recipient FullName</label>
                            </div>

                            <input
                                type="text"
                                required
                                value={fullname}
                                id="fullname"
                                readOnly
                                name="fullname"
                            />
                            <div>
                                <label htmlFor="user">User name or company name</label>
                            </div>

                            <input
                                type="text"
                                required
                                id="user"
                                readOnly
                                value={userCompany}
                                name="user"
                            />
                            <div>
                                <label htmlFor="userEmail">User email</label>
                            </div>

                            <input
                                type="email"
                                required
                                id="userEmail"
                                readOnly
                                value={userEmail}
                                name="userEmail"
                            />
                            <div>
                                <label htmlFor="email">Recipient Email</label>
                            </div>

                            <input
                                type="email"
                                required
                                id="email"
                                readOnly
                                value={username}
                                name="username"
                            />
                            <div>
                                <label htmlFor="phone">Recipient Phone Number</label>
                            </div>

                            <input
                                type="tel"
                                required
                                id="phone"
                                readOnly
                                value={phone}
                                name="phone"
                            />
                            <div>
                                <label htmlFor="message">Message</label>
                            </div>

                            <input
                                id="message"
                                required
                                value={mtext}
                                name="mtext"
                                readOnly
                            />
                            <div>
                                <button type="submit">Register</button>
                            </div>

                        </form>
                    </div>


                </div>
            </React.StrictMode>
        </div>
    )
}

export default WMsettings

export const getStaticProps = async () => {
    console.log('Connecting to Mongo')
    const db = await connectDB()
    console.log('Connected to Mongo')
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 

    let currentDate = `${currentYear}${currentMonth}${currentDay}`;

    // using this method to get the name of the current day 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const dayOfWeekIndex = date.getDay();
    const currentDayName = daysOfWeek[dayOfWeekIndex];
    // console.log(currentDayName)


    const foundUsers = (await Recipients.find({}))
    // console.log(foundUsers)
    // const allUsers = JSON.stringify(foundUsers)
    const UserDay = foundUsers.filter(e => e.checked.includes(currentDayName))
    // console.log(UserDay)
    const foundUser = UserDay.filter((el) => {
        //removing the - in the startDate date
        const yearS = el.startDate.slice(0, 4)
        const monthS = el.startDate.slice(5, 7)
        const dayS = el.startDate.slice(8, 15)

        const startDate = Number(`${yearS}${monthS}${dayS}`)
        // console.log(startDate)
        //removing the - in the endDate date
        const yearE = el.startDate.slice(0, 4)
        const monthE = el.startDate.slice(5, 7)
        const dayE = el.startDate.slice(8, 15)
        const endDate = Number(`${yearE}${monthE}${dayE}`)

        return (currentDate - startDate >= 0 && currentDate - endDate <= 0)
    })
    // console.log(foundUser)
    const foundUsersArray = []
    for (let index = 0; index < foundUser.length; index++) {
        const clientId = foundUser[index].userID[0]
        const myClient = await Users.findById(clientId)



        const recipient = [
            {
                fullname: foundUser[index].fullname,
                username: foundUser[index].email,
                phone: foundUser[index].phone,
                mtext: foundUser[index].mtext
            }
        ]

        const userInfo = [
            {
                userEmail: myClient.username,
                userCompany: myClient.companyName,

            }
        ]
        function mergeArray(array1, array2) {
            const mergedArray = { ...array1[0], ...array2[0] }
            return mergedArray
        }
        const myData = mergeArray(recipient, userInfo)


        foundUsersArray.push(myData)

    }





    // console.log(foundUsersArray)
    // console.log(foundUsersArray.length)


    return {
        props: { foundUsersArray: foundUsersArray }
    }
}