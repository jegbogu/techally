import DropDown from "../icons/dropdown";
import Link from "next/link";

import { useRouter } from "next/router";
import Logo from "./logo";
import Hamburger from "./hamburger";
import classes from './main-navigation.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from "react";


const MainNavigation = () => {
    const { data: session, status } = useSession()



    const router = useRouter()
    let profile
    function showProfile() {
        if (session.user.passport !== "none") {
            profile = <div className={classes.proImg}>
                <li onClick={handleDashboard}> <img src={session.user.passport} /></li>
            </div>
        } else if (session.user) {
            profile = <div className={classes.userInit}>
                <li onClick={handleDashboard}> {`${session.user.firstname.charAt().toUpperCase()}${session.user.lastname.charAt().toUpperCase()}`}</li>
            </div>
        } else {
            profile = " "
        }
    }
    if (status === "authenticated") {

        showProfile()
    }  
    function signIn() {
        router.push('/login')
    }



    async function logOut() {

        if (status === "authenticated") {

            await signOut({
                redirect: false
            })
            if (session.user.role === 'vendor') {
                router.push('/ernhv/ernhvLogin')
            } else if (session.user.role === 'User') {
                router.push('/login')
            } else if (session.user.role === 'Admin') {
                router.push('/ernhv/ernhv-admin-login')
            }


        }
    }
    function handleDashboard() {
        router.push("/dashboard")
    }
    return (
        <header className={classes.header}>
            <div className={classes.section}>
                <nav className={classes.nav} >
                    <div className={classes.alogo}>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>
                    <div className={classes.main}>
                        <main>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about'>About</Link></li>


                                <li className={classes.menu}>
                                    Pages
                                    <ul className={classes.dropdownMenu}>
                                        <div>
                                            <li><Link href='/activation-code'>Get Coupon Code</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/coupon-checker'>Check Code</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/how-it-works'>How it works</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/top-earners'>Top Earners</Link></li>
                                        </div>

                                    </ul>
                                </li>




                                <li style={{ marginTop: "-4px", marginLeft: "5px" }}><DropDown /></li>

                                <li><Link href='/advert'>Hive Advert</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li className={classes.termsMenu}>
                                    Terms
                                    <ul className={classes.dropdownM}>
                                        <div>
                                            <li><Link href='/tandc'>Terms and Conditions</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/privacy'>Privacy Policy</Link></li>
                                        </div>


                                    </ul>
                                </li>
                                <li style={{ marginTop: "-4px", marginLeft: "5px" }}><DropDown /></li>
                                <li><Link href='/freelancing'>Freelancing</Link></li>
                                <div className={classes.sign}>
                                    {session?.user ? (<li onClick={logOut}>Logout</li>) : (<li onClick={() => signIn()} >Login</li>)}
                                </div>
                                <div className={classes.profile}>
                                    {profile}

                                </div>






                            </ul>
                        </main>
                    </div>


                </nav>
                <div className={classes.hr}></div>
            </div>
            <div className={classes.mobileHeader}>
                <div className={classes.sign}>
                    {session?.user ? (<li onClick={logOut}>Logout</li>) : (<li onClick={() => signIn()} >Login</li>)}
                </div>
                <div className={classes.mobileNav}>
                    <div className={classes.mobileLogo}>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>

                    <div className={classes.profile}>
                        {profile}

                    </div>
                    <div className={classes.hamburger}>
                        <Hamburger />
                        <div className={classes.menu}>
                            <main>
                                <ul>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/about'>About</Link></li>
                                    <div>
                                        <li><Link href='/activation-code'>Get Coupon Code</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/coupon-checker'>Check Code</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/how-it-works'>How it works</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/top-earners'>Top Earners</Link></li>
                                    </div>

                                    <li><Link href='/advert'>Hive Advert</Link></li>
                                    <li><Link href='/contact'>Contact</Link></li>
                                     
                                            <div>
                                                <li><Link href='/tandc'>Terms and Conditions</Link></li>
                                            </div>
                                            <div>
                                                <li><Link href='/privacy'>Privacy Policy</Link></li>
                                            </div>

  
                                    <li><Link href='/freelancing'>Freelancing</Link></li>



                                </ul>
                            </main>

                        </div>


                    </div>



                </div>

            </div>

        </header>
    );
}

export default MainNavigation