import Button from '../button'
import classes from './sectionOne.module.css'
import Link from 'next/link'
import Image from 'next/image'
import wemail from '../../public/wemail.jpg'
function SectionOne() {
    return (
        <div className={classes.allSection}>
            <div className={classes.sectionOne}>
                <div className={classes.section}>
                    <div className={classes.bg}>

                    </div>
                    <div className={classes.figure}>
                        
                        <Image
                            src={wemail}
                            alt="email"
                            width={200}
                            height={200}
                        />
                    </div>

                </div>
                <div className={classes.wemail}>
                    <h3>Weekly <span>Email</span></h3>

                    <p>Get Started with just these three steps</p>
                    <ul>
                        <li>Create an Account</li>
                        <li>Log into your dashboard</li>
                        <li>Register your intending Recipient(s) with the day(s) you would love your message to be sent</li>
                    </ul>
                    <Button btn={<Link href='/register'>Start Now</Link>} />
                </div>
            </div>
        </div>

    )
}

export default SectionOne