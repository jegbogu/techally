import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
import Link from 'next/link';

import classes from './homeForm.module.css'
import Spinner from "../icons/spinner";





const HomePageForm = () => {
    const [show, setShow] = useState(false)
    const[foundUser, SetFoundUser] = useState(false)
    const [cname, setCname] = useState('Company')
    const [emailErr, setEmailErr] = useState('')
    const [password, setPassErr] = useState('')
    const [company, setCompanyErr] = useState('')
    const [spinner, SetSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')
    const router = useRouter()



    function setFnc() {
        setShow(!show)
    }


    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const useInputRef = useRef()
    const companyInputRef = useRef()
    const companyNameInputRef = useRef()

    const checkInputRef = useRef()

    async function submitHandler(e) {
        e.preventDefault()
        try {
            
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const enteredUse = useInputRef.current.value
        const enteredCompany = companyInputRef.current.value
        const enteredCompanyName = companyNameInputRef.current.value

        const enteredCheck = checkInputRef.current.value

        //validation

        if (enteredEmail.length < 12) {
            setEmailErr('Email Lenght must be greater than Twelve')
            return;
        }else{
            setEmailErr(' ')
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
        if (enteredCompanyName.length < 5) {
            setCompanyErr('Company Lenght must be greater than Five')
            return;
        }else{
            setCompanyErr(' ')
        }

        //collection of data
        const data = {
            username: enteredEmail,
            password: enteredPassword,
            use: enteredUse,
            company: enteredCompany,
            companyName: enteredCompanyName,

            check: enteredCheck
        }
        //sending API call
        setIsLoding('Hold on for few seconds...')
        SetSpinner(<Spinner/>)
        const response = await fetch('api/home/home-form', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },

        })
        if(!response.ok){
            throw new Error('User with this Email Exist ')
           
        }
         
            
        } catch (error) {
            SetFoundUser(error.message)
            SetSpinner(' ')
            setIsLoding('Error')
            setPassErr(' ')
            return;
        }


        await router.push('/login')






    }
    //setting the user choice to the label for next input field
    function companyHandler() {
        setCname(companyInputRef.current.value)
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
                    <h3>{foundUser}</h3>
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
                <div className={classes.formControl}>
                    <label htmlFor="use">Reason for Required Service</label>
                    <select required id="use" ref={useInputRef} name="use">
                        <option value='Birthday'>Birthday Messages</option>
                        <option value='Weekly SMS/Email'>Weekly SMS/Email</option>
                        <option value='Monthly SMS/Email'>Monthly SMS/Email</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <select required id="company" ref={companyInputRef} onInput={companyHandler} name="company">
                        <option value='Company'>Company</option>
                        <option value='Individual'>Individual</option>
                        <option value='Organisation'>Organization</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="companyName">{cname} Name</label>
                    <input type='text' required id="companyName" ref={companyNameInputRef} name="companyName" />
                </div>
                <div className={classes.formControl}>
                   <h3>{company}</h3> 
                </div>

                <div className={classes.formControl}>
                    <p>By Using Joerally Application Service, you agree to be bound by our <Link href='tandc' target='_blank'>Terms and Conditions</Link>. Joerally Application Service reserves the right to change the terms and conditions at any time without notice, and your continual use of Joerally Application Service constitutes your content to such changes </p>
                    <p>Do you agree with Joerally Application Service Privacy Policy?</p>
                    <div className={classes.checky}>
                        <p><Link href='tandc' target='_blank'>Terms and Conditions</Link>. </p>
                        <input type='checkbox' required ref={checkInputRef} />I Agree
                    </div>

                </div>
               
                <button type="submit">Register  {spinner}</button>
                <h4>Already have an Account? <Link href='/login' target='_blank'>Login</Link></h4>
            </form>

        </div>
    );
}

export default HomePageForm;