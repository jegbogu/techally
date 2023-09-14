import Button from '../button'
import classes from './sectionTwo.module.css'
import Link from 'next/link'
function SectionTwo() {
    return (
        <div className={classes.allSection}>
            <div className={classes.sectionOne}>
            <div className={classes.section}>
                <div className={classes.bg}>

                </div>
                <div className={classes.figure}>
                    <img src="bemail.jpg" alt="email" width={300}/>
                </div>
                
            </div>
            <div className={classes.wemail}>
                <h3>Birthday <span>Email</span></h3>
                <p>Get Started with just these three steps</p>
                 <ul>
                    <li>Create an Account</li>
                    <li>Log into your dashboard</li>
                    <li>Register the birthday of each your intending Recipient</li>
                 </ul>
                <Button btn={<Link href='/register'>Start Now</Link>}/>
            </div>
        </div>
        </div>
        
    )
}

export default SectionTwo