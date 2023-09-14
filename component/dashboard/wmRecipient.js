import classes from './recipientDetail.module.css'
function WmRecipient(props) {
    return (
        <div className={classes.details}>
            <p className={classes.register}>Details</p>
            <div className={classes.section}>
                <div>
                <p>Fullname: {props.fullname}</p>
                </div>
               <div>
               <p>Email: {props.email}</p>
               </div>
               
            </div>
            <div className={classes.sectionTwo}>
             
            <p>Start Date: {props.startDate}</p>
            <p>End Date: {props.endDate}</p>
            <p>Phone: {props.phone}</p>
            <p>Message: {props.mtext}</p>
            </div>
           

        </div>
    )
}

export default WmRecipient