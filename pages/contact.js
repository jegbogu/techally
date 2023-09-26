import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from "react";
import userContext from "../store/userContext";
import { signIn } from "next-auth/react";
import Spinner from "../component/icons/spinner";
import { Fragment } from "react";
import classes from '../component/home-page/homeForm.module.css'
const Contact = () => {
    const { user, setUser } = useContext(userContext)
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const [show, setShow] = useState(false)
    const [emailErr, setEmailErr] = useState(' ')
    
    const [spinner, SetSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')

    const emailInputRef = useRef()
    const phoneInputRef = useRef()
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
            setPassErr(' ');
        }

        setWaitMsg('Hold on for few seconds...')
       
        SetSpinner(<Spinner/>)

        // signIn("credentials", { ...values, redirect: false })
        // .then(({ ok, error }) => {
        //     if (ok) {
        //         router.push("/dashboard");
        //     } else {
        //         console.log(error)
        //         toast("Credentials do not match!", { type: "error" });
        //     }
        // })

        const handleSign = async ()=>{
            try {
                const result  = await signIn("credentials",{
                    username: enteredEmail,
                    password: enteredPassword,
                    role:'user',
                    redirect: false,
                   
                }) 
                if(!result.ok){
                    throw new Error('Invalid Username or Password')
                }else{
                    router.push('/dashboard')
                }
             

            } catch (error) {
                
                setEmailErr(error.message)
                setIsLoding('')
                SetSpinner('')
                setPassErr('')
                return;
            }
        }
        
        
        handleSign()
       
         
    }
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Send us your Message" />
            </Head>
            <div>
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
                            <label htmlFor="phone">Phone Number</label>

                            <input
                                type="text" 
                                required id="phone"
                                ref={phoneInputRef}
                                name='phone'
                            />

                             
                        </div>


                        <button type="submit">Submit  {spinner}</button>
                         
                    </form>

                </div>
            </div>
        </Fragment>


    );
}

export default Contact;