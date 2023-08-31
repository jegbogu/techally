import connectDB from "../utils/connectmongo"
import Birthday from '../model/birthdaySchema'
import Users from '../model/registerSchema'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from "react";
function Setting(props) {
    console.log(props.foundUsersArray.length)
    const [fullname, SetFullname] = useState('')
    const [userCompany, SetUserCompany] = useState('')
    const [userEmail, SetUserEmail] = useState(' ')
    const [username, SetUsername] = useState('')
    const [phone, SetPhone] = useState('')
    const [mtext, SetMtext] = useState('')
    const form = useRef()
    

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
        // emailjs.sendForm('service_nzetccr',"template_zkhggef",  form.current, 'hUsD5Xio8nnVwcw7l')
        //     .then((result) => {
        //         console.log(result.text);

        //         // alert('message successfully sent ')
        //         // event.target.reset()
        //     }, (error) => {
        //         console.log(error.text);
        //     });

       
    }


    return (
        <React.StrictMode>
            <div>
                <h3>Database</h3>
                <h1>Register a New Recipient for Birthday Messages</h1>


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
    )
}
export default Setting






export const getStaticProps = async () => {
    console.log('Connecting to Mongo')
    const db = await connectDB()
    console.log('Connected to Mongo')
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 
    const userArr = []
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const foundUsers = (await Birthday.find({}))
    const foundUser = foundUsers.filter(e => e.dob === currentDate)
    const foundUsersArray = []
    // console.log(foundUser)
    for (let index = 0; index < foundUser.length; index++) {
        const clientId = foundUser[index].userID[0]
        const myClient = await Users.findById(clientId)



        const recipient = [
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



    return {
        props: {
            foundUsersArray: foundUsersArray
        }
    }

}

