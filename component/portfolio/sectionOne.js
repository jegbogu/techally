import Link from 'next/link'
import Image from 'next/image'
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
                    <Image
                        src='/profile.jpg'
                        alt="profile"
                        width={500}
                        height={300}
                      
                    />

                    
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

                                <div>
                                    <Link href='https://github.com/jegbogu/' target='_blank'><GithubIcon /></Link>
                                </div>
                                <div>
                                    <Link href='https://www.linkedin.com/in/egbogu-joseph-13092211a/' target='_blank'><LinkedinIcon /></Link>
                                </div>
                                <div>
                                    <Link href='https://twitter.com/ChineduEgbogu' target='_blank'><TwitterIcon /></Link>
                                </div>
                                <div>
                                    <Link href='https://www.youtube.com/channel/UCgarg3Tr-WtAhKCesxJonJA' target='_blank'><YoutubeIcon /></Link>
                                </div>
                                <div>
                                    <Link href='https://drive.google.com/file/d/1pwaA_Hw7UofyVN8pSXO8cVV0x7_reIS6/view' target='_blank'><ResumeIcon /></Link>
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