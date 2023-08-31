import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
 const Admin = require('../../../model/adminSchema')
const bcrypt = require('bcrypt')
 
 
  
     
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{username, password, role} = req.body
        console.log({username, password,role})
        if(role==='Admin'){
            console.log({ username, password })
            const user = await Admin.findOne({ username })
            // console.log(user)
            const validUser = await bcrypt.compare(password, user.password)
            // console.log(validUser)
            if (!validUser) {
                res.status(403).json({ message: 'not an Admin' })
                return
            }
            res.status(200).json(user);
        }
       
        const user = await Users.findOne({username}) 
         console.log(user)
         const validUser = await bcrypt.compare(password, user.password)
         console.log(validUser)
         if(!validUser){
            res.status(403).json({message:'not a user'})
          return
         }
         res.status(200).json(user);
        
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler