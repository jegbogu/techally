import Button from "../button"
import classes from './custom.module.css'

function Custom(){
    return(
        <div className={classes.custom}>
            <h2>Let us build your own custom <span>Email/SMS</span> Auto System</h2>
            <div>
                <h3>Core <span>Features</span></h3>
                <ul>
                    <li>Admin control and management dashboard</li>
                    <li>Automated SMS/Emails </li>

                </ul>
            <Button btn={'Sign Up'}/>
            </div>
          
        </div>
    )
}

export default Custom