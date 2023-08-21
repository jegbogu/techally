import connectDB from "../utils/connectmongo"
import Birthday from '../model/birthdaySchema'
import Users from '../model/registerSchema'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef,useEffect} from "react";
function Setting(props) {
console.log(props.foundUsersArray.length)
    const [fullname, SetFullname] = useState('')
    const [userCompany, SetUserCompany] = useState('')
    const [userEmail, SetUserEmail] = useState('')
    const [username, SetUsername] = useState('')
    const [phone, SetPhone] = useState('')
    const [mtext, SetMtext] = useState('')
    const form = useRef()
    //setting the value of the first user after 5sec
useEffect(()=>{
    if(props.foundUsersArray.length>0){
        setTimeout(() => {
            SetFullname(props.foundUsersArray[0].fullname)
            SetUserCompany(props.foundUsersArray[0].userCompany)
            SetUserEmail(props.foundUsersArray[0].userEmail)
            SetUsername(props.foundUsersArray[0].username)
            SetPhone(props.foundUsersArray[0].phone)
            SetMtext(props.foundUsersArray[0].mtext)
        }, 5000);
    }
    
},[])

//submit the form after 15sec of filling it for the first person
useEffect(()=>{
    if(props.foundUsersArray.length>0){
        setTimeout(() => {
            submitHandler()
        }, 15000);
    }
   
},[])
 //setting the value of the second user after 25sec
useEffect(()=>{
    if(props.foundUsersArray.length>1){
        setTimeout(() => {

            SetFullname(props.foundUsersArray[1].fullname)
            SetUserCompany(props.foundUsersArray[1].userCompany)
            SetUserEmail(props.foundUsersArray[1].userEmail)
            SetUsername(props.foundUsersArray[1].username)
            SetPhone(props.foundUsersArray[1].phone)
            SetMtext(props.foundUsersArray[1].mtext)
        }, 25000);
    }
   
},[])
//submit the form after 15sec of filling it for the second person
useEffect(()=>{
    if(props.foundUsersArray.length>1){
        setTimeout(() => {
            submitHandler()
        }, 35000);
    }
    
},[])
//  setting the value of the second user after 25sec
useEffect(()=>{
    if(props.foundUsersArray.length>2){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[2].fullname)
        SetUserCompany(props.foundUsersArray[2].userCompany)
        SetUserEmail(props.foundUsersArray[2].userEmail)
        SetUsername(props.foundUsersArray[2].username)
        SetPhone(props.foundUsersArray[2].phone)
        SetMtext(props.foundUsersArray[2].mtext)
    }, 40000);
}
},[])
//submit the form after 15sec of filling it for the second person
useEffect(()=>{
    if(props.foundUsersArray.length>2){
        setTimeout(() => {
            submitHandler()
        }, 50000);
    }
   
},[])
//  setting the value of the third user  
useEffect(()=>{
    if(props.foundUsersArray.length>3){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[3].fullname)
        SetUserCompany(props.foundUsersArray[3].userCompany)
        SetUserEmail(props.foundUsersArray[3].userEmail)
        SetUsername(props.foundUsersArray[3].username)
        SetPhone(props.foundUsersArray[3].phone)
        SetMtext(props.foundUsersArray[3].mtext)
    }, 60000);
}
},[])
//submit the form for the third user
useEffect(()=>{
    if(props.foundUsersArray.length>3){
        setTimeout(() => {
            submitHandler()
        }, 70000);
    }
   
},[])
//  //  setting the value of the fourth user  
useEffect(()=>{
    if(props.foundUsersArray.length>4){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[4].fullname)
        SetUserCompany(props.foundUsersArray[4].userCompany)
        SetUserEmail(props.foundUsersArray[4].userEmail)
        SetUsername(props.foundUsersArray[4].username)
        SetPhone(props.foundUsersArray[4].phone)
        SetMtext(props.foundUsersArray[4].mtext)
    }, 80000);
}
},[])
//submit the form for the fourth user
useEffect(()=>{
    if(props.foundUsersArray.length>4){
        setTimeout(() => {
            submitHandler()
        }, 90000);
    }
   
},[])
//  //  setting the value of the five user  
useEffect(()=>{
    if(props.foundUsersArray.length>5){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[5].fullname)
        SetUserCompany(props.foundUsersArray[5].userCompany)
        SetUserEmail(props.foundUsersArray[5].userEmail)
        SetUsername(props.foundUsersArray[5].username)
        SetPhone(props.foundUsersArray[5].phone)
        SetMtext(props.foundUsersArray[5].mtext)
    }, 100000);
}
},[])
//submit the form for the fifth user
useEffect(()=>{
    if(props.foundUsersArray.length>5){
        setTimeout(() => {
            submitHandler()
        }, 120000);
    }
   
},[])
//  //  setting the value of the sixth user  
useEffect(()=>{
    if(props.foundUsersArray.length>6){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[6].fullname)
        SetUserCompany(props.foundUsersArray[6].userCompany)
        SetUserEmail(props.foundUsersArray[6].userEmail)
        SetUsername(props.foundUsersArray[6].username)
        SetPhone(props.foundUsersArray[6].phone)
        SetMtext(props.foundUsersArray[6].mtext)
    }, 140000);
}
},[])
//submit the form for the sixth user
useEffect(()=>{
    if(props.foundUsersArray.length>6){
        setTimeout(() => {
            submitHandler()
        }, 160000);
    }
   
},[])
//  //  setting the value of the seventh user  
useEffect(()=>{
    if(props.foundUsersArray.length>7){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[7].fullname)
        SetUserCompany(props.foundUsersArray[7].userCompany)
        SetUserEmail(props.foundUsersArray[7].userEmail)
        SetUsername(props.foundUsersArray[7].username)
        SetPhone(props.foundUsersArray[7].phone)
        SetMtext(props.foundUsersArray[7].mtext)
    }, 180000);
}
},[])
//submit the form for the sixth user
useEffect(()=>{
    if(props.foundUsersArray.length>7){
        setTimeout(() => {
            submitHandler()
        }, 200000);
    }
   
},[])
//  //  setting the value of the eighth user  
useEffect(()=>{
    if(props.foundUsersArray.length>8){
    setTimeout(() => {
        SetFullname(props.foundUsersArray[8].fullname)
        SetUserCompany(props.foundUsersArray[8].userCompany)
        SetUserEmail(props.foundUsersArray[8].userEmail)
        SetUsername(props.foundUsersArray[8].username)
        SetPhone(props.foundUsersArray[8].phone)
        SetMtext(props.foundUsersArray[8].mtext)
    }, 220000);
}
},[])
//submit the form for the sixth user
useEffect(()=>{
    if(props.foundUsersArray.length>8){
        setTimeout(() => {
            submitHandler()
        }, 240000);
    }
   
},[])







    function submitHandler(event) {
       
        // using Email.js to send Aumatic Dynamic emails
            // function display(){
            //     console.log(form.current)
            // }
            // display()
        emailjs.sendForm('service_nzetccr',"template_zkhggef",  form.current, 'hUsD5Xio8nnVwcw7l')
            .then((result) => {
                console.log(result.text);
 
                alert('message successfully sent ')
                // event.target.reset()
            }, (error) => {
                console.log(error.text);
            });
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

