import DashboardBanner from '../component/dashboard/dashboardBanner'
import DashboardSide from '../component/dashboard/sideBar'
import classes from './profile.module.css'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import DeleteAccountForm from '../component/dashboard/deleteAccountForm';

 



function ChangePassword() {
    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <p>Loading</p>
    }
    if (status === "unauthenticated") {
        router.push('/login')
        return
    }
    return (
        <div className={classes.profilePics}>
            <div className={classes.bar}>
                <DashboardSide />
            </div>
             <div className={classes.board}>
                <DashboardBanner/>
               <DeleteAccountForm/>
             </div>
           
        </div>




    );
}

export default ChangePassword