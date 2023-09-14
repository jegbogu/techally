 import BUseEditItem from "./bUseEditItem"

function BUseList(props){
    return(
         <ul className={classes.list}>
        {props.userData.map((user)=>(
            <BUseEditItem
            key = {user.id}
            id = {user.id}
            fullname = {user.fullname}
            dob = {user.dob}
            username = {user.username}
            phone = {user.phone}
            mtext = {user.mtext}
            />
        ))}
         </ul>
    )
}

export default BUseList