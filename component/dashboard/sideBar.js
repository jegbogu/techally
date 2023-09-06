import Link from 'next/link'
 
import BankTwo from '../icons/bankTwo'
 
import EditIcon from '../icons/edit'
import DownlineIcon from '../icons/downline'
import EarningTwoIcon from '../icons/earningTwo'
 import { useRouter } from 'next/router'
import ShareIcon from '../icons/shareIcon'
import classes from './dashboardSide.module.css'
import {  signOut, useSession } from 'next-auth/react'
import ProfileIcon from '../icons/profile'
import TrashIcon from '../icons/trash'


function DashboardSide() {
    const { data: session, status } = useSession()
    const router = useRouter()
  
async function logoutFnc(){
await signOut()
router.push('/login')
}

   
    let profile
    function showProfile() {
        if (session.user.passport !== "none") {
            profile = <div className={classes.proImg}>
                <li> <img src={session.user.passport} /></li>
            </div>
        } else if (session.user) {
            profile = <div className={classes.userInit}>
                <li> {`${session.user.companyName.charAt()}`}</li>
            </div>
        } else {
            profile = " "
        }
    }
    if (status === "authenticated") {

        showProfile()
    }
    return (
        <div className={classes.sidebar}>
            <div className={classes.profile}>
             <Link href="/dashboard">{profile}</Link>   
            </div>
            
            <div>
             <button><Link href="/dashboard"><ProfileIcon/> Add A Recipient</Link> </button>  
            </div>
            <div>
             <button><Link href='/profile'><DownlineIcon />Upload A Profile Picture</Link></button>   
            </div>
            <div>
               <button> <Link href='/editprofile'><EditIcon />Edit  Profile </Link></button> 
            </div>
            <div>
              <button><Link href='/changepassword'><EarningTwoIcon /></Link>Change Password</button>  
            </div>

            <div>
             <button><Link href="/allrecipients"> <BankTwo/>Recipients Settings</Link> </button> 
            </div>
            <div>
              <button><Link href='/deleteAccount'><TrashIcon/>  Delete Account</Link></button>  
            </div>
            <div>
              <button onClick={logoutFnc}><ShareIcon />Logout</button>  
            </div>


        </div>
    )
}

export default DashboardSide