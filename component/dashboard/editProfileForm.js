import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession, signOut } from "next-auth/react";
import classes from './profileimage.module.css'
import Spinner from "../icons/spinner";





const EditProfileForm = () => {
  
    const[foundUser, SetFoundUser] = useState(false)
    const [cname, setCname] = useState('Company')
    
    const [company, setCompanyErr] = useState('')
    const [spinner, SetSpinner] = useState(false)
    const [isLoading, setIsLoding] = useState('')
    const{data:session,status} = useSession()
    const router = useRouter()

     
    const companyInputRef = useRef()
    const companyNameInputRef = useRef()

   

    async function submitHandler(e) {
        e.preventDefault()
        try {
            
        const enteredEmail = session.user.username
        const enteredCompany = companyInputRef.current.value
        const enteredCompanyName = companyNameInputRef.current.value
 

        //validation

        
       
        if (enteredCompanyName.length < 5) {
            setCompanyErr('Company Lenght must be greater than Five')
            return;
        }else{
            setCompanyErr(' ')
        }

        //collection of data
        const data = {
            username: enteredEmail,
            company: enteredCompany,
            companyName: enteredCompanyName,

          
        }
        //sending API call
        setIsLoding('Hold on for few seconds...')
        SetSpinner(<Spinner/>)
        const response = await fetch('api/editProfile/editProfileForm', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },

        })
        
         
            
        } catch (error) {
            SetFoundUser(error.message)
            SetSpinner(' ')
            setIsLoding('Error')
            setPassErr(' ')
            return;
        }


       await signOut()






    }
    //setting the user choice to the label for next input field
    function companyHandler() {
        setCname(companyInputRef.current.value)
    }




    return (
        <div className={classes.section}>

            <form onSubmit={submitHandler} className={classes.form}>
            <p className={classes.register}>Update Your Details</p>
                <h3>{isLoading}</h3>
                
                <div>
                    <h3>{foundUser}</h3>
                   
                </div>
                  
                <div className={classes.control}>
                    <select required id="company" ref={companyInputRef} onInput={companyHandler} name="company">
                        <option value='Company'>Company</option>
                        <option value='Individual'>Individual</option>
                        <option value='Organisation'>Organization</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="companyName">{cname} Name</label>
                    <input type='text' required id="companyName" ref={companyNameInputRef} name="companyName" />
                </div>
                <div className={classes.formControl}>
                   <h3>{company}</h3> 
                </div>

                 
                <div className={classes.actions}>
                        <button type="submit">Update Details {spinner}</button>
                    </div>
                
            </form>

        </div>
    );
}

export default EditProfileForm 
    ;