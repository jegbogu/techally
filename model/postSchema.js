const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
    title: {
    type: String,
    require: true,
    minLength: [1, 'Firstname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  
  },
  image: {
    type: String,
    require: true,
    trim: true
  
  },
  
  category: {
    type: String,
    require: true,
    
    trim: true,
     
  },
   
  description:{
    type: String,
    require: true,
    trim: true
},
spaceOne:{
  type: String,
    require: true,
    trim: true
},
spaceTwo:{
  type: String,
    require: true,
    trim: true
},
spaceThree:{
  type: String,
    require: true,
    trim: true
},
 
   
})
 
module.exports = mongoose.models.Post || mongoose.model('Post', postSchema)