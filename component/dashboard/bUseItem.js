import EditIcon from "../icons/edit"
 
import TrashIcon from "../icons/trash"
import classes from './bUseItem.module.css'
import { useSession } from "next-auth/react"
import { useState } from "react"

function BUseItem() {
    const[sUsers, SetSUsers] = useState([])
    const{data:session} = useSession()
    const allUsers = session.user.recipients.slice(1,1000)
function searchFnc(e){
  const foundUser =  allUsers.filter((el)=>{
        return el.includes(e.target.value)
    })
 
    SetSUsers(foundUser)
}

    return (
        <div className={classes.section}>
            <p className={classes.register}>Recipients</p>
             <input
             placeholder="Search Recipients using Email"
             onChange={searchFnc}
            
             />
           
            <table>

                <tr>
                    <th>S/N</th>
                    <th>Recipients</th>
                   
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>

                {sUsers.length===0?SetSUsers(allUsers): sUsers.map((el,i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                         <td>{el}</td>
                       
                        <td>{<EditIcon/> }</td>
                        <td>{<TrashIcon/>}</td>
                      <td>View</td>
                        



                    </tr>
                ))}
            </table>
        </div>
    )
}

export default BUseItem