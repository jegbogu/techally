import Button from '../button'
import classes from './sectionOne.module.css'
import Link from 'next/link'
function SectionOne() {
    return (
        <div className={classes.sectionOne}>
            <div className={classes.section}>
                <div className={classes.bg}>

                </div>
                <div className={classes.figure}>
                    <img src="wemail.jpg" alt="email" width={200}/>
                </div>
                
            </div>
            <div className={classes.wemail}>
                <h3>Weekly Email</h3>
                <p>In today's digital age, effective communication is paramount for maintaining strong relationships with users and customers. These emails offer a consistent and reliable channel for sharing updates, valuable content, and fostering engagement.  </p>
                <Button btn={<Link href='/register'>Start Now</Link>}/>
            </div>
        </div>
    )
}

export default SectionOne