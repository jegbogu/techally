import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react'
import classes from './profileimage.module.css'





const DeleteAccountForm = () => {
    const router = useRouter()
    const [errMsg, setErrMsg] = useState("")
    const { data: session, status } = useSession()
    const emailInputRef = useRef()

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const userEmail = session.user.username
        if (enteredEmail===userEmail && enteredEmail.includes('@')) {
            setErrMsg("Please hold on...")
        } else {
            setErrMsg("Please provide a valid email ")
            return;
        }
        // const data = { 
        //     passport:enteredImage,
        //     refUsername: session.user.refUsername

        // }

        // console.log(data)

        const response = await fetch('api/delete/delete-form', {
            method: 'POST',
            body: JSON.stringify({ userEmail }),
            headers: {
                'Content-type': 'application/json'
            },

        });
        let user = await response.json()

        if (!response.ok) {
            setErrMsg(user.message)
            return
        }else if(response.ok){
            setErrMsg(user.message)
        }

        await signOut()







    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                <p className={classes.register}>Delete Account</p>
                    <div className={classes.control}>
                        {errMsg}

                        <label htmlFor="email">Confirm this action by typing in your email</label>
                        <input type='email'
                            required id="email"
                            name="email"
                         
                            ref={emailInputRef} />
                        <marquee>Please Note that this acction is IRREVOCABLE...</marquee>
                    </div>


                    <div className={classes.actions}>
                        <button type="submit">Delete</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default DeleteAccountForm;