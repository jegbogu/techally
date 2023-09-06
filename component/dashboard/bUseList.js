import BUseItem from "./bUseItem"

function BUseList(props){
    return(
         <ul className={classes.list}>
        {props.users.map((user)=>(
            <BUseItem 
            key = {user.id}
            id = {user.id}
            fullname = {user.fullname}
            username = {user.username}
            />
        ))}
         </ul>
    )
}

export default BUseList