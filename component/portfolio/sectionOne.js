import FacebookIcon from '../icons/facebook'
import GithubIcon from '../icons/github'
import LinkedinIcon from '../icons/linkedin'
import ResumeIcon from '../icons/resume'
import TwitterIcon from '../icons/twitter'
import YoutubeIcon from '../icons/youtube'
import classes from './sectionOne.module.css'

function SectionOne() {
    return (
        <div className={classes.head}>
            <div className={classes.banner}>

            </div>
            <div className={classes.intro}>
                <div className={classes.figure}>
                    <img src='/profile.jpg' alt='picture' />
                </div>
                <div className={classes.firstly}>
                    <div className={classes.welcome}>
                        <p>Hello & Welcome</p>
                    </div>
                    <div className={classes.info}>
                        <h3>I'M <span>EGBOGU JOSEPH</span></h3>
                        <p>Software Engineer & Technical Support Personnel</p>
                    </div>
                    <div className={classes.secondly}>
                    <p><span>Email</span>  jegbogu@gmail.com</p>
                    <p><span>Phone</span>  +2348167577935</p>
                    <p><span>Address</span>  Port Harcourt, Rivers State Nigeria</p>
                    <p><span>Website</span>  joerally.com</p>
                    <div className={classes.social}>
                        <div className={classes.icons}>
                       
                        <FacebookIcon/>
                     
                       <div>
                       <GithubIcon/>
                       </div>
                       <div>
                       <LinkedinIcon/>
                       </div>
                        <div>
                        <TwitterIcon/>
                        </div>
                        <div>
                        <YoutubeIcon/>
                        </div>
                        <div>
                       <ResumeIcon/> 
                        </div>
                      
                        </div>
                       
                </div>
                </div>
                </div>
                
                

            </div>

        </div>
    )
}

export default SectionOne