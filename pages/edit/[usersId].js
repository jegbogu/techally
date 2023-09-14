import connectDB from "../../utils/connectmongo"
import Users from '../../model/registerSchema'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import Birthday from '../../model/birthdaySchema'
 import DashboardSide from "../../component/dashboard/sideBar"
 import DashboardBanner from "../../component/dashboard/dashboardBanner"
import BUseEditItem from "../../component/dashboard/bUseEditItem"
import classes from '../profile.module.css'
function EditUser(props){
    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <p>Loading</p>
    }
    if (status === "unauthenticated") {
        router.push('/login')
        return
    }
    return(
        <div className={classes.profilePics}>
        <div className={classes.bar}>
            <DashboardSide />
        </div>
         <div className={classes.board}>
            <DashboardBanner/>
            <BUseEditItem 
         id={props.userData.id}
         fullname={props.userData.fullname}
         dob={props.userData.dob}
         username={props.userData.username}
         phone = {props.userData.phone}
         mtext = {props.userData.mtext}
         />
         </div>
       
    </div>
        
    )
}

export default EditUser


export const getStaticPaths = async ()=>{
   await connectDB()
   const users =await  Users.find({},{_id:1}) 
 
   return{
    fallback:'blocking',
    paths: users.map((user)=>({
        params:{usersId: user._id.toString()}
    }))
   }
}

export const getStaticProps = async (context) =>{
const usersId = context.params.usersId
await connectDB()
//getting the owner id
const userid = usersId.slice(usersId.indexOf('|')+1,100)
         
//getting the recipient email in the array
const recipientEmail = usersId.slice(0,usersId.indexOf('|'))
 

//finding the user with the id
const foundUser = await Users.findOne({_id:userid})
const use = foundUser.use
let selectedUser
if(use ==="Birthday"){
    selectedUser =  await Birthday.findOne({ username: recipientEmail, userID: { $in: [userid] } })
    return {
        props: {
          userData: {
            id:  selectedUser._id.toString(),
            fullname: selectedUser.fullname,
            dob: selectedUser.dob,
            username: selectedUser.username,
            phone: selectedUser.phone,
            mtext: selectedUser.mtext,
          },
          revalidate: 1,
        }
    }
}

}