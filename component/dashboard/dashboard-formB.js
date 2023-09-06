import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import classes from './dashboard-form.module.css'
import Spinner from "../icons/spinner";





const DashboardFormB = () => {
const{data:session,status} = useSession()
let userID;
if (status === "authenticated") {
    userID = session.user._id
} else {
    console.log('not true')
}

    const [emailErr, setEmailErr] = useState('')

    const [count, setCount] = useState(0)
    const [maxMessage, setMaxMessage] = useState('')
    const [spinner, setSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')
    const router = useRouter()



    const FullNameInputRef = useRef()
    const dobInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef = useRef()
    const messageInputRef = useRef()


    async function submitHandler(e) {
        e.preventDefault()

        const enteredFullName = FullNameInputRef.current.value
        const enteredDobInputRef = dobInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPhone = phoneInputRef.current.value
        const enteredMessage = messageInputRef.current.value

        //validation

        if (enteredEmail.length < 10) {
            setEmailErr('Email Lenght must be greater than Ten')
            return;
        }
        

        //collection of data
        const data = {
            fullname: enteredFullName,
            dob : enteredDobInputRef,
            username: enteredEmail,
            phone:enteredPhone,
            mtext: enteredMessage,
            userID: userID
        }
        //sending API call
         
        const response = await fetch('api/dashboardform/dashboardB', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },

        })
        const userData = await response.json()
        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        setIsLoding('Hold on for few seconds...')
        setSpinner(<Spinner/>)
        router.reload()






    }
    //setting the user choice to the label for next input field

    let change = (e) => {
        wordcount(e.target.value);
    };

    function wordcount(str) {
        let c = 0;
        let str1 = str.split(" ");


        for (let i = 0; i < str1.length; i++) {
            if (str1.length === 0) {
                setCount(0);
            }
            if (i === 400) {
                setMaxMessage('Maximum of 400 words')
            }
            if (str1[i] !== "") {
                c++;
            }
            setCount(c);
        }
    }

    return (
        <div className={classes.form}>
            <h3>{isLoading}</h3>
            <form onSubmit={submitHandler}>
                <p className={classes.register}>Register a New Recipient for Birthday Messages</p>
                <div>
                    <label htmlFor="fullname">Recipient FullName</label>
                    <input type='text'
                        required
                        id="fullname"
                        ref={FullNameInputRef}
                        name="fullname" />
                </div>

                <div>
                    <label htmlFor="dob">Recipient Date Of Birth</label>
                    <input
                        type='date'
                        required id="dob"
                        ref={dobInputRef}
                        name='dob'
                    />
                </div>
                <div>
                    <label htmlFor="email">Recipient Email</label>
                    <input
                        type='email'
                        required id="email"
                        ref={emailInputRef}
                        name='username'
                    />
                </div>
                <div className={classes.error}>
                    {emailErr}
                </div>


                <div>
                    <label htmlFor="phone">Recipient Phone Number</label>
                    <input
                        type='tel'
                        required id="phone"
                        ref={phoneInputRef}
                        name='phone'
                    />
                </div>





                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id='message'
                        required
                        rows='5'
                        ref={messageInputRef}
                        minLength='10'
                        onChange={change}
                        name="message"
                    >
                    </textarea>
                </div>
                <div>
                    {count}/400
                </div>
                <div>
                    {maxMessage}
                </div>

                <button type="submit">Register {spinner}</button>

            </form>

        </div>
    );
}

export default DashboardFormB;