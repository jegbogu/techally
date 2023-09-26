import Button from "../button"
import classes from './custom.module.css'
import Link from 'next/link'

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
                <Link href='/contact'><Button btn={'Start Now'} /></Link> 
            </div>
          
        </div>
    )
}

export default Custom