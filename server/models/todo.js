var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }

});


module.exports = {
  Todo:Todo
};     //exporting the model, it is an object and we are setting Todo property equal to the Todo variable
