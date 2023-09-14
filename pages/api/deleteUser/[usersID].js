import Users from '../../../model/registerSchema'
import connectDB from '../../../utils/connectmongo'
 
async function handler(req, res) {
    try {
        if (req.method !== 'GET') {
            return;
          }
          const {usersID} = req.query
          //connecting to DB
          await connectDB()
          //getting the owner id
          const userid = usersID.slice(usersID.indexOf('|')+1,100)
         
          //getting the recipient email in the array
          const recipientEmail = usersID.slice(0,usersID.indexOf('|'))
         
          //finding the user with the id
         const foundUser = await Users.findOne({_id:userid})
        
         //removing the deleted user from the array
        const newRecipients = foundUser.recipients.filter((el)=>{
            return el !== recipientEmail
        })
        
        await Users.findOneAndUpdate({_id:userid},{
        $set:{recipients:newRecipients}
        })
        
        res.status(200).json({message:'Successfully Deleted'})
    } catch (error) {
        console.log(error)
    }
  
 

    

}

export default handler;