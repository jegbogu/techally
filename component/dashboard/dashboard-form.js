import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";






const DashboardForm = () => {
    const [checked, setChecked] = useState([])
    //setting the days on the array
    const arrayDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    function addDays(days){
        setChecked((prevDays)=>{
            return prevDays.concat(days)
        })
    }

    function removeDays(days){
        setChecked(prevDays=>{
            return prevDays.filter(day=>day!==days)
        })
    }

    function handleCheck(event){
        
        if(event.target.checked){
             addDays(event.target.value)
        } else if(!event.target.checked){
            removeDays(event.target.value)
        }
          
          
    }

    const { data: session, status } = useSession()
    let userID;
    if (status === "authenticated") {
        userID = session.user._id
    } else {
        console.log('not true')
    }

    const [emailErr, setEmailErr] = useState('')

    const [count, setCount] = useState(0)
    const [maxMessage, setMaxMessage] = useState('')
    const [isLoading, setIsLoding] = useState('')
    const router = useRouter()




    const startDateInputRef = useRef()
    const startTimeInputRef = useRef()
    const endDateInputRef = useRef()

    const FullNameInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef = useRef()
    const messageInputRef = useRef()




    async function submitHandler(e) {
        e.preventDefault()

        const enteredStartDate = startDateInputRef.current.value
        
        const enteredEndDateInputRef = endDateInputRef.current.value

        const enteredFullName = FullNameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPhone = phoneInputRef.current.value
        const enteredMessage = messageInputRef.current.value


        //validation

        if (enteredEmail.length < 10) {
            setEmailErr('Email Lenght must be greater than Ten')
            return;
        }


        //collection of data
        const data = {
            startDate: enteredStartDate,
           
            endDate: enteredEndDateInputRef,
            checked:checked,

            fullname: enteredFullName,
            email: enteredEmail,
            phone: enteredPhone,
            mtext: enteredMessage,
            userID: userID

        }
        //sending API call
        setIsLoding('Hold on for few seconds...')
        console.log(data)
        const response = await fetch('api/dashboardform/dashboardMW', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },

        })
        const userData = await response.json()
        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        router.reload()






    }


    //setting the user choice to the label for next input field

    let change = (e) => {
        wordcount(e.target.value);
    };

    function wordcount(str) {
        let c = 0;
        let str1 = str.split(" ");


        for (let i = 0; i < str1.length; i++) {
            if (str1.length === 0) {
                setCount(0);
            }
            if (i === 400) {
                setMaxMessage('Maximum of 400 words')
            }
            if (str1[i] !== "") {
                c++;
            }
            setCount(c);
        }
    }

    return (
        <div>
            <h3>{isLoading}</h3>
            <form onSubmit={submitHandler}>
                <h1>Register a New Recipient for Weekly SMS/Email</h1>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="startDate" id="startDate" ref={startDateInputRef} />
                </div>
               
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" name="endDate" id="endDate" ref={endDateInputRef} />
                </div>
                <div>
                    <h3>Choose Days for Message Delivery</h3>
                    <div>
                        {arrayDays.map((day,index)=>(
                            <div key={index}>
                                <input type="checkBox" value={day} onChange={handleCheck}/>
                                <span>{day}</span>
                            </div>
                        ))}
                    </div>


                </div>

                <div>
                    <label htmlFor="fullname">Recipient FullName</label>
                    <input type='text'
                        required
                        id="fullname"
                        ref={FullNameInputRef}
                        name="fullname" />
                </div>
                <div>
                    <label htmlFor="email">Recipient Email</label>
                    <input
                        type='email'
                        required id="email"
                        ref={emailInputRef}
                        name='email'
                    />
                </div>
                <div>
                    {emailErr}
                </div>

                <div>
                    <label htmlFor="phone">Recipient Phone Number</label>
                    <input
                        type='tel'
                        required id="phone"
                        ref={phoneInputRef}
                        name='phone'
                    />
                </div>





                <div>
                    <label htmlFor="mtext">Message</label>
                    <textarea
                        id='mtext'
                        required
                        rows='5'
                        ref={messageInputRef}
                        minLength='10'
                        onChange={change}
                        name="mtext"
                    >
                    </textarea>
                </div>
                <div>
                    {count}/400
                </div>
                <div>
                    {maxMessage}
                </div>

                <button type="submit">Register</button>

            </form>

        </div>
    );
}

export default DashboardForm;