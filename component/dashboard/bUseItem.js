import EditIcon from "../icons/edit"
 import { useRouter } from "next/router"
import TrashIcon from "../icons/trash"
import classes from './bUseItem.module.css'
import { useSession , signOut} from "next-auth/react"
import { useState } from "react"
import Spinner from '../icons/spinner'
import Button from '../../component/button'
import Link from "next/link"


function BUseItem() {
    const[sUsers, SetSUsers] = useState([])
    const[deleteMsg, SetDeleteMsg] = useState('')
 
    const router = useRouter()
    const{data:session} = useSession()
//ensuring the good state of the application
    if(session.user.recipients.length===1){
        return(
            <div className={classes.noRecipient}>
                <h1>No Recipients Yet</h1>
               <Link href={'/dashboard'}><Button btn={'Kindly Start Adding'}/></Link> 
            </div>
        )
    }
    const allUsers = session.user.recipients.slice(1,1000)
function searchFnc(e){
  const foundUser =  allUsers.filter((el)=>{
        return el.includes(e.target.value)
    })
 
    SetSUsers(foundUser)
}



    return (
        <div className={classes.section}>
            <p className={classes.register}>Recipients </p>
             <input
             placeholder="Search Recipients using Email"
             onChange={searchFnc}
            
             />
           <h3 className={classes.deleteMsg}>{deleteMsg}</h3>
           <table>

                <tr>
                    <th>S/N</th>
                    <th>Recipients Email</th>
                   
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>

                {sUsers.length===0?SetSUsers(allUsers): sUsers.map((el,i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                         <td>{el}</td>
                       
                        <td className={classes.edit} onClick={()=>{
                        //we have to get the email of the recipients and also the id of the user in session the | helps to know where to slice from in order to get the email and the id
                            router.push(`edit/${el}|${session.user._id}`)
                        }}>{<EditIcon/> }</td>
                        <td className={classes.delete} onClick={async()=>{
                        //we have to get the email of the recipients and also the id of the user in session the | helps to know where to slice from in order to get the email and the id
                          const response = await fetch(`api/deleteUser/${el}|${session.user._id}`,{
                            method:'GET'
                          }) 
                          const msg = await response.json()
                          SetDeleteMsg(msg.message)
                          await signOut()
                        }}>{<TrashIcon/>} </td>
                      <td className={classes.view} onClick={()=>{

                        router.push(`recipients/${el}|${session.user._id}`)
                      }}>View</td>
                        



                    </tr>
                ))}
            </table>
        </div>
    )
}

export default BUseItem