import classes from './recipientDetail.module.css'
function RecipientDetail(props) {
    return (
        <div className={classes.details}>
            <p className={classes.register}>Details</p>
            <div className={classes.section}>
                <div>
                <p>Fullname: {props.fullname}</p>
                </div>
               <div>
               <p>Email: {props.username}</p>
               </div>
               
            </div>
            <div className={classes.sectionTwo}>
             
            <p>DOB: {props.dob}</p>
            <p>Phone: {props.phone}</p>
            <p>Message: {props.mtext}</p>
            </div>
           

        </div>
    )
}

export default RecipientDetail