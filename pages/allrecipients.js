import DashboardBanner from '../component/dashboard/dashboardBanner'
import DashboardSide from '../component/dashboard/sideBar'
import classes from './profile.module.css'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
// import connectDB from '../utils/connectmongo'
// import User from '../model/registerSchema'
 
import BUseItem from '../component/dashboard/bUseItem';
 

 



function AllRecipients(props) {
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
                <BUseItem/>
                
             </div>
           
        </div>




    );
}

// export async function getStaticProps() {
    
//     await connectDB()
//     const allUsers = await User.find({})
   
//     const birthdayUser = allUsers.filter((el)=>{
//         return el.use === "Birthday"
//     })
    
//     console.log(birthdayUser)
//      const birthdayUsers = birthdayUser.find((el)=>{
//         return el._id === userID
//      })
//      console.log(birthdayUsers)

//     return {
//         props: {
//             users: birthdayUsers.map((user) => ({
//                 fullname: user.fullname,
//                 username: user.username,
//                 id: user._id.toString(),
//             })),
//             revalidate: 1,
//         }
//     }
// }

export default AllRecipients