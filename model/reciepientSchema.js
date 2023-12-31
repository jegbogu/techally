const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const recipientSchema = new Schema({
  startDate: {
    type: String
  },
  
  endDate: {
    type: String
  },
  checked:[{type:String}],
  fullname: {
    type: String,
    require: true,
    minLength: [5, 'fullname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    minLength: [5, 'email characters must be greater five'],
    toLowerCase: true,
    trim: true,
    
  },
  phone: {
    type: Number,
    require: true,
   
    trim: true,
  },
  mtext: {
    type: String,
    require: true,
    trim: true
  },
  spaceOne:{
    type:String
},
space:{
    type:String
},
spaceTwo:{
    type:String
},
  userID: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
})

module.exports =mongoose.models.Recipients || mongoose.model('Recipients', recipientSchema)
 

 