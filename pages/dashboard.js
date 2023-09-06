import Dashboard from "../component/dashboard/dashboard";
import { useSession} from "next-auth/react"
import DashboardSide from "../component/dashboard/sideBar";
import classes from './dashboard.module.css'
import Button from "../component/button";
import Link from "next/link";

const UsersDashboard = () => {
    const { data: session, status } = useSession()
    if (status==="loading") {
        return <p>Loading...</p>
      }
      if (status === "unauthenticated") {
        return(
         <div className={classes.logedOut}>
          <p>Please Kindly Login to continue with your dashboard</p>
          <Link href={'/login'}><Button btn={'Login'}/></Link> 
        </div>)
      }
    return ( 
        <div className={classes.userDashbord}>
          <div className={classes.bar}>
          <DashboardSide/>
          </div>
          <div className={classes.board}>
          
          <Dashboard/>  
          </div>
         
        
        </div>
     );
}
 
export default UsersDashboard;