import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
  
  
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{userEmail} = req.body
      
            console.log({userEmail})
            const user = await Users.findOneAndDelete({username:userEmail})
            
             console.log(user)
           
             
         
            res.status(200).json({message:'Deleted'})
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler