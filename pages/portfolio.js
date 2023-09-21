import Head from "next/head";
import { Fragment } from "react";
import SectionOne from "../component/portfolio/sectionOne";
import Skills from "../component/skills/sectionOne";
import classes from './portfolio.module.css'
import Education from "../component/education/education";

import Button from "../component/button";
import Project from "../component/project/project";
import Link from "next/link";
import Contact from "../component/contactPortfolio/contact";
const Portfolio = () => {
    return (
        <Fragment>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My Projects and Details" />
            </Head>
            <div>
                <SectionOne />
                <div className={classes.skills}>
                    <h3>Skills</h3>
                    <Skills />
                    <div className={classes.resume}>
                        <Link href={"https://drive.google.com/file/d/1iZdEUEDcMxcMRPBrfzZ9s1W26-Es9ahm/view?usp=sharing"} target="_blank"><Button btn={"View Resume"} /></Link>
                    </div>
                </div>
                <div className={classes.edu}>
                    <h3>Education</h3>
                    <Education />
                </div>
                <div className={classes.pro}>
                    <h3>Featured Projects</h3>
                    <Project />
                </div>
                <div className={classes.contact}>
                    <h3>Contact <span>Me</span></h3>
                    <Contact />
                </div>

            </div>
        </Fragment>
    );
}

export default Portfolio;