import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from "react";
import userContext from "../store/userContext";
import { signIn } from "next-auth/react";
import Spinner from "./icons/spinner";
 import classes from '../component/home-page/homeForm.module.css'


const LoginForm = () => {
    const { user, setUser } = useContext(userContext)
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const [show, setShow] = useState(false)
    const [emailErr, setEmailErr] = useState(' ')
    const [password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, SetSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //validation
        
        if (enteredEmail.length < 12) {
            setEmailErr('Email Lenght must be greater than Twelve')
            return;
        }else{
            setEmailErr('')
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }

        setWaitMsg('Hold on for few seconds...')
       
        SetSpinner(<Spinner/>)
        const result  = await signIn("credentials",{
            username: enteredEmail,
            password: enteredPassword,
            role:'user',
            redirect: true,
            callbackUrl:"/dashboard"
        })
        // console.log(result)
       
         
    }

    return (
        <div className={classes.section}>

        <form onSubmit={submitHandler} className={classes.form}>
            <h3>{isLoading}</h3>
            <div className={classes.formControl}>
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    required id="email"
                    ref={emailInputRef}
                    name='username'
                />
            </div>
            <div>
                
               <h3>{emailErr}</h3> 
            </div>
            <div className={classes.formControl}>
                <label htmlFor="password">Password</label>

                <input
                    type={show ? "text" : "password"}
                    required id="password"
                    ref={passwordInputRef}
                    name='password'
                />

                <span onClick={setFnc}>{show ? "Hide" : "Show"}</span>
                <div>
                  <h3> {password}</h3> 
                </div>
            </div>
             
           
            <button type="submit">Login  {spinner}</button>
            <h4 style={{color:'white'}}>You do not have an Account? <Link href='/register' target='_blank'>Register</Link></h4>
        </form>

    </div>
    );
}

export default LoginForm;