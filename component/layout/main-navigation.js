import { useRouter } from "next/router";
import Hamburger from "./hamburger";
import classes from './main-navigation.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from "react";
import Logo from "./logo";
import Link from 'next/link';
import Account from "../account";
import Image from "next/image";

const MainNavigation = () => {
    const { data: session, status } = useSession()



    const router = useRouter()
    let profile
    function showProfile() {
        if (session.user.passport !== "none") {
            profile = <div className={classes.proImg}>
                <li onClick={handleDashboard}>
                    <img
                   
                        src={session.user.passport}
                        alt="passport"
                        width={300}
                        height={45}
                    /></li>
            </div>
        } else if (session.user) {
            profile = <div className={classes.userInit}>
                <li onClick={handleDashboard}> {`${session.user.companyName.charAt()}`}</li>
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
            if (session.user.role === 'user') {
                router.push('/login')
            } else if (session.user.role === 'Admin') {
                router.push('/adminLoginTsl')
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
                                <li><Link href='/dashboard'>Dashboard</Link></li>
                                <li><Link href='/portfolio'>My Portfolio</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li><Link href='/services'>Services</Link></li>
                                <li><Link href='/blog'>Blog</Link></li>
                                <div className={classes.ps}>
                                    <div className={classes.sign}>
                                        {session?.user ? (<li onClick={logOut}>Logout</li>) : (<li onClick={() => signIn()} >Login</li>)}
                                    </div>
                                    <div className={classes.profile}>
                                        {profile}

                                    </div>
                                </div>

                            </ul>
                        </main>
                    </div>


                </nav>
                <div className={classes.contact}>
                    <p>joerallytech@gmail.com | +2348167577935</p>
                </div>
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
                                    <li><Link href='/dashboard'>Dashboard</Link></li>
                                    <li><Link href='/portfolio'>My Portfolio</Link></li>
                                    <li><Link href='/contact'>Contact</Link></li>
                                    <li><Link href='/services'>Services</Link></li>
                                    <li><Link href='/blog'>Blog</Link></li>
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