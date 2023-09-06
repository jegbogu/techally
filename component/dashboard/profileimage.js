import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react'
import classes from './profileimage.module.css'





const ProfileImage = () => {
    const router = useRouter()
    const [errMsg, setErrMsg] = useState("")
    const { data: session, status } = useSession()
    const imageInputRef = useRef()

    async function submitHandler(event) {
        event.preventDefault()
        const enteredImage = imageInputRef.current.value;
        const userID = session.user._id
        if (enteredImage.length > 6 && enteredImage.includes('http')) {
            setErrMsg("Please hold on...")
        } else {
            setErrMsg("Please provide a valid http link")
            return;
        }
        // const data = { 
        //     passport:enteredImage,
        //     refUsername: session.user.refUsername

        // }

        // console.log(data)

        const response = await fetch('api/userImage/image-form', {
            method: 'POST',
            body: JSON.stringify({ enteredImage, userID }),
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
                <p className={classes.register}>Upload Your Profile Picture</p>
                    <div className={classes.control}>
                        {errMsg}

                        <label htmlFor="passport">Profile Image Url</label>
                        <input type='text'
                            required id="passport"
                            name="passport"
                            placeholder="https://....."
                            ref={imageInputRef} />
                        <marquee>Please Note that you would have to log out and login again to see your new profile picture</marquee>
                    </div>


                    <div className={classes.actions}>
                        <button type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default ProfileImage;