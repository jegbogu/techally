import Button from '../button'
import classes from './sectionTwo.module.css'
import Link from 'next/link'
function SectionTwo() {
    return (
        <div className={classes.sectionOne}>
            <div className={classes.section}>
                <div className={classes.bg}>

                </div>
                <div className={classes.figure}>
                    <img src="bemail.jpg" alt="email" width={300}/>
                </div>
                
            </div>
            <div className={classes.wemail}>
                <h3>Birthday Email</h3>
                <p>In today's digital age, personalized communication holds significant value. One such opportunity for businesses and individuals alike is sending scheduled birthday emails. With Joerally, you can effortlessly connect with your customers, friends, and family by sending heartfelt birthday wishes right on time.  </p>
                <Button btn={<Link href='/register'>Start Now</Link>}/>
            </div>
        </div>
    )
}

export default SectionTwo