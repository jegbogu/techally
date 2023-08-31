import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
 
 
 
 
 
 


const  AdminTsl= () => {
  
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()
        const  enteredFirstname= firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //validation
        
        if (enteredEmail.length < 15) {
            setEmailErr('Email Lenght must be greater than Fifteen')
            return;
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
        setWaitMsg('Hold on for few seconds...')
       
        // collection of data
         const data = {
            firstname: enteredFirstname,
            lastname: enteredLastName,  
            username: enteredEmail,
            password: enteredPassword,
            role: 'Admin'
             
         }
         console.log(data)
        const response = await fetch('api/admin/admin-register', {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        router.push('/adminLoginTsl')
    }
       
         
    
        
    return ( 
        
        <div  >
            <h2>Admin Registration</h2>
        <div >
        
             <form onSubmit={submitHandler} >
                <div >
               
                    <h3>{waitMsg}</h3>
                   <label htmlFor="firstname">Firstname</label>
                   <input type='text' 
                   required id="firstname" 
                   name = "firstname"
                   placeholder= "John"
                   ref={firstNameInputRef}/>
                  
                </div>
                <div  >
                
                   <label htmlFor="Lastname">Lastname</label>
                   <input type='text' 
                   required id="lastname" 
                   name = "lastname"
                   placeholder= "Doe"
                   ref={lastNameInputRef}/>
                  
                </div>
                <div >
              
                   <label htmlFor="username">Username</label>
                   <input type='text' 
                   required id="username" 
                   name = "username"
                   placeholder= "jsmith@gmail.com"
                   ref={emailInputRef}/>
                  
                </div>
                <div>
                    {emailErr}
                </div>

                <div  >
                   <label htmlFor="password">Password</label>
                   
                   <input type={show?"text":"password"}
                    required id="password"
                    name="password" 
                    ref={passwordInputRef}/>

                    <div >
                    < span onClick={setFnc}  >{show?"Hide":"Show"}</span>
                    </div>
                   <div>
                    {password}
                   </div>
                </div>
                 
               
                <div  >
                 <button type="submit">Register</button>
                 </div>

              
                
            </form>
            
        </div>
        </div>
    
     );
}
 
export default AdminTsl;