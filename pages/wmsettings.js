import connectDB from "../utils/connectmongo"
import Recipients from '../model/reciepientSchema'
import Users from '../model/registerSchema'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from "react";

function WMsettings(props) {
    console.log(props.foundUsersArray.length)
    const [fullname, SetFullname] = useState('')
    const [userCompany, SetUserCompany] = useState('')
    const [userEmail, SetUserEmail] = useState(' ')
    const [username, SetUsername] = useState('')
    const [phone, SetPhone] = useState('')
    const [mtext, SetMtext] = useState('')
    const form = useRef()
    

    const [isTimeToRunFunction, setIsTimeToRunFunction] = useState(false);

    useEffect(() => {
        const checkTimeAndRunFunction = () => {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinutes = currentTime.getMinutes();

            if (currentHour === 14 &&(currentMinutes >= 18 && currentMinutes<=52)) {
                setIsTimeToRunFunction(true);
            }
        };

        const interval = setInterval(checkTimeAndRunFunction, 60000); // Check every minute

        return () => {
            clearInterval(interval);
        };
    }, []);
    //setting the value of the first user after 5sec
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 0) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[0].fullname)
                    SetUserCompany(props.foundUsersArray[0].userCompany)
                    SetUserEmail(props.foundUsersArray[0].userEmail)
                    SetUsername(props.foundUsersArray[0].username)
                    SetPhone(props.foundUsersArray[0].phone)
                    SetMtext(props.foundUsersArray[0].mtext)
                    console.log(userEmail)
                }, 5000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the first person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 0) {
                setTimeout(() => {
                    submitHandler()
                }, 15000);
            }
        }

    }, [isTimeToRunFunction])
     
    //setting the value of the second user
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 1) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[1].fullname)
                    SetUserCompany(props.foundUsersArray[1].userCompany)
                    SetUserEmail(props.foundUsersArray[1].userEmail)
                    SetUsername(props.foundUsersArray[1].username)
                    SetPhone(props.foundUsersArray[1].phone)
                    SetMtext(props.foundUsersArray[1].mtext)
                    console.log(userEmail)
                }, 25000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the for the second person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 1) {
                setTimeout(() => {
                    submitHandler()
                }, 35000);
            }
        }

    }, [isTimeToRunFunction])
     
    //setting the value of the third person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 2) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[2].fullname)
                    SetUserCompany(props.foundUsersArray[2].userCompany)
                    SetUserEmail(props.foundUsersArray[2].userEmail)
                    SetUsername(props.foundUsersArray[2].username)
                    SetPhone(props.foundUsersArray[2].phone)
                    SetMtext(props.foundUsersArray[2].mtext)
                    console.log(userEmail)
                }, 45000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for third person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 2) {
                setTimeout(() => {
                    submitHandler()
                }, 55000);
            }
        }

    }, [isTimeToRunFunction])
     
    //setting the value of the  fourth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 3) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[3].fullname)
                    SetUserCompany(props.foundUsersArray[3].userCompany)
                    SetUserEmail(props.foundUsersArray[3].userEmail)
                    SetUsername(props.foundUsersArray[3].username)
                    SetPhone(props.foundUsersArray[3].phone)
                    SetMtext(props.foundUsersArray[3].mtext)
                    console.log(userEmail)
                }, 65000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the fourth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 3) {
                setTimeout(() => {
                    submitHandler()
                }, 75000);
            }
        }

    }, [isTimeToRunFunction])
    //setting the value of the  fifth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 4) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[4].fullname)
                    SetUserCompany(props.foundUsersArray[4].userCompany)
                    SetUserEmail(props.foundUsersArray[4].userEmail)
                    SetUsername(props.foundUsersArray[4].username)
                    SetPhone(props.foundUsersArray[4].phone)
                    SetMtext(props.foundUsersArray[4].mtext)
                    console.log(userEmail)
                }, 85000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the fifth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 4) {
                setTimeout(() => {
                    submitHandler()
                }, 95000);
            }
        }

    }, [isTimeToRunFunction])
    //setting the value of the  sixth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 5) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[5].fullname)
                    SetUserCompany(props.foundUsersArray[5].userCompany)
                    SetUserEmail(props.foundUsersArray[5].userEmail)
                    SetUsername(props.foundUsersArray[5].username)
                    SetPhone(props.foundUsersArray[5].phone)
                    SetMtext(props.foundUsersArray[5].mtext)
                  
                }, 105000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the sixth  person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 5) {
                setTimeout(() => {
                    submitHandler()
                }, 115000);
            }
        }

    }, [isTimeToRunFunction])
    //setting the value of the  seventh person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 6) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[6].fullname)
                    SetUserCompany(props.foundUsersArray[6].userCompany)
                    SetUserEmail(props.foundUsersArray[6].userEmail)
                    SetUsername(props.foundUsersArray[6].username)
                    SetPhone(props.foundUsersArray[6].phone)
                    SetMtext(props.foundUsersArray[6].mtext)
                 
                }, 125000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the seventh person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 6) {
                setTimeout(() => {
                    submitHandler()
                }, 135000);
            }
        }

    }, [isTimeToRunFunction])
    //setting the value of the  eigth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 7) {
                setTimeout(() => {
                    SetFullname(props.foundUsersArray[7].fullname)
                    SetUserCompany(props.foundUsersArray[7].userCompany)
                    SetUserEmail(props.foundUsersArray[7].userEmail)
                    SetUsername(props.foundUsersArray[7].username)
                    SetPhone(props.foundUsersArray[7].phone)
                    SetMtext(props.foundUsersArray[7].mtext)
                 
                }, 145000);
            }
        }

    }, [isTimeToRunFunction])

    //submit the form  for the eigth person
    useEffect(() => {
        if (isTimeToRunFunction) {
            if (props.foundUsersArray.length > 7) {
                setTimeout(() => {
                    submitHandler()
                }, 155000);
            }
        }

    }, [isTimeToRunFunction])
     







    async function submitHandler(event) {


        // using Email.js to send Aumatic Dynamic emails
        // function display() {
        //     console.log(form.current)

        // }
        // display()
        emailjs.sendForm('service_f1x6cbs',"template_mt6vbhs",  form.current, 'or6O6zejdIMnsxvYi')
            .then((result) => {
                console.log(result.text);

                // alert('message successfully sent ')
                // event.target.reset()
            }, (error) => {
                console.log(error.text);
            });

       
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
const UserDay = foundUsers.filter(e => e.checked.includes(currentDayName) )
console.log(UserDay)
const foundUser = UserDay.filter((el)=>{
    //removing the - in the startDate date
    const yearS = el.startDate.slice(0,4)
    const monthS = el.startDate.slice(5,7)
    const dayS = el.startDate.slice(8,15)
    
    const startDate = Number(`${yearS}${monthS}${dayS}`)
    console.log(startDate)
    //removing the - in the endDate date
    const yearE = el.startDate.slice(0,4)
    const monthE = el.startDate.slice(5,7)
    const dayE = el.startDate.slice(8,15)
    const endDate = Number(`${yearE}${monthE}${dayE}`)
   
    return (currentDate-startDate>=0 && currentDate-endDate<=0)
})
console.log(foundUser)
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





console.log(foundUsersArray)
console.log(foundUsersArray.length)


    return{
        props:{ foundUsersArray: foundUsersArray}
    }
}