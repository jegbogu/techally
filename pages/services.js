import Head from "next/head";
import { Fragment } from "react";
import classes from './services.module.css'

import SectionOne from '../component/sectionOne/sectionOne';
import SectionTwo from '../component/sectionTwo/sectionTwo';
 
import Custom from '../component/sectionThree/custom';
import MoreServices from '../component/sectionFour/moreservices';


const Services = () => {
    return ( 
        <Fragment>
        <Head>
            <title>Services</title>
            <meta name="description" content="Services that we offer"/>
        </Head>
        <div>
        <div className={classes.sectionR}>
        <h2 className={classes.header}>Our <span>Email</span> Services</h2>
        <div className={classes.sendEmail}>
          <SectionOne />
          <SectionTwo />
        </div>
        <div>
        <Custom/>
        </div>
        <div className={classes.moreservices}>
          <h2>Other <span>Services</span></h2>
          <MoreServices/>
        </div>
        </div>
        </div>
    </Fragment>
     );
}
 
export default Services;