import classes from './logo.module.css'
import Image from 'next/image';
import logoTwo from '../../public/logoTwo.png'
const Logo = () => {
    return (
        <div className={classes.logo}>
            <Image
                src={logoTwo}
                alt="email"
                width={150}
                
            />
            {/* <img src="logoTwo.png" alt="logo" width={150} /> */}
        </div>
    );
}

export default Logo;