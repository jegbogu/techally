import Button from '../button'
import classes from './sectionTwo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bemail from '../../public/bemail.jpg'
function SectionTwo() {
    return (
        <div className={classes.allSection}>
            <div className={classes.sectionOne}>
                <div className={classes.section}>
                    <div className={classes.bg}>

                    </div>
                    <div className={classes.figure}>
                        <Image
                            src={bemail}
                            alt="email"
                            width={290}
                            height={200}
                        />
                    </div>

                </div>
                <div className={classes.wemail}>
                    <h3>Birthday <span>Email</span></h3>
                    <p><b>Get Started with just these three steps</b></p>
                    <ul>
                        <li>Create an Account</li>
                        <li>Log into your dashboard</li>
                        <li>Register your intending Recipient(s) Birthday</li>
                    </ul>
                    <Button btn={<Link href='/register'>Start Now</Link>} />
                </div>
            </div>
        </div>

    )
}

export default SectionTwo