import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
  
 
 
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{username,  company,companyName} = req.body
      
            console.log({username,company,companyName})
            const user = await Users.findOne({username:username})
            console.log(user)
           
            await Users.findOneAndUpdate({ username: username }, {
                $set: {
                     
                    company:company,
                    companyName:companyName,
                }
            })
           
            if(!user){
               res.status(403).json({message:'not a user'})
             return
            }
         
            res.status(200).json({message:'created'})
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler