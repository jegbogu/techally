import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
 
 
import { signIn } from "next-auth/react";
 


const  AdminLoginTsl= () => {
  
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
   

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
        setWaitMsg('Hold on for few seconds...')
        if (enteredEmail.length < 10) {
            setEmailErr('Email Lenght must be greater than ten')
            return;
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
         

     
        const result  = await signIn("credentials",{
            username: enteredEmail,
            password: enteredPassword,
            role: 'Admin',
            redirect: true,
            callbackUrl:"/adminDashboard"
        })
        // console.log(result)
       
         
    }
        
    return ( 
        
        <div  >
            <h2>Admin Login</h2>
        <div  >
        <div  >
        
          </div>
             <form onSubmit={submitHandler} >
                <div  >
            
                    <h3>{waitMsg}</h3>
                   <label htmlFor="Username">Email</label>
                   <input type='text' 
                   required id="Username" 
                   name = "Username"
                   placeholder= "jsmith@gmail.com"
                   ref={emailInputRef}/>
                  
                </div>
                <div>
                    {emailErr}
                </div>

                <div >
                   <label htmlFor="Password">Password</label>
                   
                   <input type={show?"text":"password"}
                    required id="password"
                    name="Password" 
                    ref={passwordInputRef}/>

                    <div  >
                    < span onClick={setFnc}  >{show?"Hide":"Show"}</span>
                    </div>
                   <div>
                    {password}
                   </div>
                </div>
                 
               
                <div  >
                 <button type="submit">Login</button>
                 </div>

                
                 
                
            </form>
            
        </div>
        </div>
    
     );
}
 
export default AdminLoginTsl;