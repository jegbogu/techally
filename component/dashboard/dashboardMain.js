import { useState } from "react";
import classes from './dashboardMain.module.css'
import { useSession } from "next-auth/react";
import EditIcon from "../icons/edit";
import ProfileIcon from "../icons/profile";
import EarningTwoIcon from "../icons/earningTwo";
import Link from "next/link";
import ShareIcon from "../icons/shareIcon";
import DownlineIcon from "../icons/downline";
import TrashIcon from "../icons/trash";
function DashboardMain() {
    
    const { data: session, status } = useSession()
    async function logoutFnc(){
        await signOut()
        router.push('/login')
        }
     
        
     




    return (
        <div className={classes.section}>
           
            <div className={classes.sectionTwo}>
                <div className={classes.easyDiv}>
                <h4>Easy Access</h4>
                </div>
                
                <div className={classes.icons}>
                     
                    <div className={classes.icon}>
                        <div className={classes.iconbtnOne}>
                            <button>
                            <Link href="/dashboard"><ProfileIcon/></Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Add A Recipient</button>
                        </div>
                    </div>
                    <div className={classes.icon}>
                        <div className={classes.iconbtnOne}>
                            <button>
                            <Link href='/profile'><DownlineIcon /> </Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Upload A Profile Picture</button>
                        </div>
                    </div>

                    <div className={classes.icon}>
                        <div className={classes.iconbtnOne}>
                            <button>
                            <Link href='/editprofile'><EditIcon /> </Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Edit  Profile </button>
                        </div>
                    </div>
                    <div className={classes.icon}>
                        <div className={classes.iconbtnOne}>
                            <button>
                            <Link href='/changepassword'><EarningTwoIcon /></Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Change Password</button>
                        </div>
                    </div>
                    <div className={classes.icon}>
                        <div className={classes.iconbtnOne}>
                            <button>
                            <Link href='/deleteAccount'><TrashIcon/>  </Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Delete Account</button>
                        </div>
                        
                    </div>
                    <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button onClick={logoutFnc}><ShareIcon /> </button> 
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Logout</button>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DashboardMain