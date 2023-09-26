import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
 
 
import { signIn } from "next-auth/react";
import Spinner from "../component/icons/spinner";
import { Fragment } from "react";
import classes from '../component/home-page/homeForm.module.css'
const Contact = () => {

    
    const [spinner, SetSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')

    const emailInputRef = useRef()
    const phoneInputRef = useRef()
    const useInputRef = useRef()
    const messageInputRef = useRef()
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
                    <h1>I'm So <span>Glad to Have you</span> Here</h1>
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
                        
                        <div className={classes.formControl}>
                            <label htmlFor="phone">Phone Number</label>

                            <input
                                type="text" 
                                required id="phone"
                                ref={phoneInputRef}
                                name='phone'
                            />
                             
                        </div>
                        <div className={classes.formControl}>
                    <label htmlFor="use">Required Service</label>
                    <select required id="use" ref={useInputRef} name="use">
                        <option value='custom Email/SMS Auto System'>Custom Email/SMS Auto System</option>
                        <option value='ERP & SaaS Products'>ERP & SaaS Products</option>
                        <option value='E-Commerce Application & Management Application'>E-Commerce Application & Management Application</option>
                        <option value='Bussiness website & SEO'>Bussiness website & SEO</option>
                        <option value='Learn a skill'>I want to Learn a Skill</option>
                        <option value='Learn a skill'>I want to Hire You</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id='message'
                        required
                        rows='5'
                        ref={messageInputRef}
                        minLength='10'
                       
                        name="message"
                    >
                    </textarea>
                </div>


                        <button type="submit">Submit  {spinner}</button>
                         
                    </form>

                </div>
            </div>
        </Fragment>


    );
}

export default Contact;