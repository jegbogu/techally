import Link from 'next/link'
import Button from '../button'
import classes from './contact.module.css'
function Contact(){
    return(
        <div className={classes.contact}>
            <div className={classes.figure}>
                <img src='https://media.tenor.com/2fXbn6Xtt0UAAAAC/software-software-development.gif' alt="oppurtunities"/>
            </div>
            <div className={classes.oppo}>
                <p>I am Currently Open to contracts, full time and part time opportunities </p>
               <Link href='/contact'><Button btn={'Contact Me'}/></Link> 
            </div>
        </div>
    )
}

export default Contact