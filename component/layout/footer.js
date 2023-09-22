import classes from './footer.module.css'
import Logo from './logo';
import Link from 'next/link';
import GithubIcon from '../icons/github';
 import LinkedinIcon from '../icons/linkedin';
 import YoutubeIcon from '../icons/youtube';
import TwitterIcon from '../icons/twitter';
 
  
 

const Footer = () => {
    return ( 
        <div className={classes.section}>
             
        <div className={classes.footer}>
            <div className={classes.menu}>
            
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/dashboard'>Dashboard</Link></li>
                                <li><Link href='/portfolio'>My Portfolio</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li><Link href='/services'>Services</Link></li>
                                <li><Link href='/blog'>Blog</Link></li>
                                
                            

                            </ul>
                           
            </div>
            <div className={classes.icons}>
                <p className={classes.rof}>Reach Out & Folow Us:</p>
         
         <span> <Link href='https://github.com/jegbogu/' target='_blank'><GithubIcon/></Link> </span> 

         <span> <Link href='https://www.linkedin.com/in/egbogu-joseph-13092211a/' target='_blank'><LinkedinIcon/></Link>  </span> 
       
         <span> <Link href='https://twitter.com/ChineduEgbogu' target='_blank'><TwitterIcon/></Link> </span> 
         <span> <Link href='https://www.youtube.com/channel/UCgarg3Tr-WtAhKCesxJonJA' target='_blank'><YoutubeIcon/></Link> </span> 
         
          
          
            </div>
            <div className={classes.logo}>
            <Logo/>
            </div>
        </div>
        <p style={{color:'gold',textAlign:'center'}}>Copyright@Joerally </p>
      
        </div>
     );
}
 
export default Footer;