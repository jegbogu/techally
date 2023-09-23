import Link from 'next/link';
import classes from './bannerPara.module.css'
import Button from '../button';

const BannerPara = () => {
    return (
        <div className={classes.bannerParagraph}>
            <p>You can relax while our system send your birthday messages via <span>emails</span>  and weekly <span>emails</span>!</p>

            <Button btn={<Link href='/register'>Create Free Account</Link>}/>
        </div>

    );
}

export default BannerPara;