import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";
 
import emailjs from '@emailjs/browser';
 
 
import Spinner from "../component/icons/spinner";
import { Fragment } from "react";
import classes from '../component/home-page/homeForm.module.css'
const Contact = () => {

    const [emailErr, setEmailErr] = useState('')
    const [spinner, SetSpinner] = useState(false)
    const [waitMsg, setWaitMsg] = useState('')
    const form = useRef()
    const emailInputRef = useRef()
    
   


     

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;

        //validation
        
        if (enteredEmail.length < 12) {
            setEmailErr('Email Lenght must be greater than Twelve')
            return;
        }else{
            setEmailErr('')
        }
        

        setWaitMsg('Hold on for few seconds...')
       SetSpinner(<Spinner/>)
      
// using Email.js to send Aumatic Dynamic emails
            // function display() {
            //     console.log(form.current)
    
            // }
            // display()
            emailjs.sendForm('service_rbqx1gi',"template_q4aguff",  form.current, 'ZxZYrxVe8fCVY8jiO')
                .then((result) => {
                    console.log(result.text);
                    
                    setWaitMsg('message successfully sent ')
                    SetSpinner(false)
                    event.target.reset()
                    setTimeout(() => {
                        setWaitMsg('')
                    },3000);
                   
                }, (error) => {
                    console.log(error.text);
                });
    
       
         
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
                    <form onSubmit={submitHandler} className={classes.form} ref={form}>
                        <h3>{waitMsg}</h3>
                        <div className={classes.formControl}>
                            {emailErr}
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
                              
                                name='phone'
                            />
                             
                        </div>
                        <div className={classes.formControl}>
                    <label htmlFor="use">Required Service</label>
                    <select required id="use"   name="use">
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