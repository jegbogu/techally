
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import React from 'react';



const Database = () => {
    const form = useRef(null)
    const [myData, setMyData] = useState([])
    
     

    useEffect(() => {

        const checkTime = () => {

            setTimeout(() => {

                console.log('data is coming')
                searchDB()
            }, 18000);


        };
        checkTime()


    }, []); // Empty dependency array to ensure the effect runs only once

    // ... Rest of your component's code


    useEffect(() => {
        const checkTime = () => {
            setTimeout(() => {
                submitHandler()
            }, 30000);

        };
        checkTime()

    }, []); // Empty dependency array to ensure the effect runs only once

    // ... Rest of your component's code

    async function searchDB() {

        const response = await fetch('api/database/database', {
            method: "GET",
        })
        const userData = await response.json()
        console.log(userData.foundUsersArray)
        let newData = userData.foundUsersArray
        setMyData(newData)
        
        setTimeout(() => {
            submitHandler() 
        }, 60000);
        setTimeout(() => {
            handleClearFields()
        }, 60000);
             
         
           
        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

    }

    function submitHandler(event) {

        //using Email.js to send Aumatic Dynamic emails

        emailjs.sendForm('service_f1x6cbs', 'template_mt6vbhs', form.current, 'or6O6zejdIMnsxvYi')
            .then((result) => {
                // console.log(result.text);

                // setContent(<div className={classes.orderMsg}>Your Order was successfull</div>) 
                // console.log('message sent');
                alert('message successfully sent ')
                // event.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    const handleClearFields = () => {
        if (form.current) {
            const inputFields = form.current.querySelectorAll('input');
            inputFields.forEach((input) => {
                input.value = '';
            });
        }
    };

    return (
        <React.StrictMode>
            <div>
                <h3>Database</h3>
                <h1>Register a New Recipient for Birthday Messages</h1>
               
                   
                    {myData.map((recipient, index) => (
                         <div key={index}>
                         <form ref={form} onSubmit={submitHandler} >
                       
                            <label htmlFor="fullname">Recipient FullName</label>
                            <input
                                type="text"
                                required
                                value={recipient.fullname}
                                id="fullname"
                                readOnly
                                name="fullname"
                            />

                            <label htmlFor="user">User name or company name</label>
                            <input
                                type="text"
                                required
                                id="user"
                                readOnly
                                value={recipient.userCompany}
                                name="user"
                            />

                            <label htmlFor="userEmail">User email</label>
                            <input
                                type="email"
                                required
                                id="userEmail"
                                readOnly
                                value={recipient.userEmail}
                                name="userEmail"
                            />

                            <label htmlFor="email">Recipient Email</label>
                            <input
                                type="email"
                                required
                                id="email"
                                readOnly
                                value={recipient.username}
                                name="username"
                            />

                            <label htmlFor="phone">Recipient Phone Number</label>
                            <input
                                type="tel"
                                required
                                id="phone"
                                readOnly
                                value={recipient.phone}
                                name="phone"
                            />

                            <label htmlFor="message">Message</label>
                            <input
                                id="message"
                                required
                                value={recipient.mtext}
                                name="mtext"
                                readOnly
                            />
                        
                        <button type="submit">Register</button>
                </form>
                </div>
                    ))}
                    
            </div>
        </React.StrictMode>
    )

}
export default Database