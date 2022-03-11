const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const flightSchema= new Schema({
    Flight_Log_NO:{
        type: String,
        
    },
    Drone_Id:{
        type: String,
       
    },
    Payload_Type:{
        type: String,
        
    },
    Take_Off_site:{
        type: String,
    },
    Operation_Start_Time:{
        type: String,
        
    },
    Operation_End_Time:{
        type: String,
        
    },
    Distance_Covered:{
        type: String,
       
    },
    Duration:{
        type: String,
    },
    Remarks:{
        type: String,
    },
    Image:{
        type :Array
    }
    

})

const OperationSchema = new Schema({
    Date:{
        type: String,
        require: true,
    },
    District:{
        type:String,
        require:true
    },
    Crew_name:{
        type: String,

    },
    Raider_Incharge_name:{
        type: String,
    },
    Flight_Supervisor:{
        type: String,
    },
    Pilot_name:{
        type: String,
       
    },
    Crew_id:{
        type:String,

    },
    Designation:{
        type:String,
    },
    Flight_Supervisor_id:{
        type:String,
    },
    Pilot_id:{
        type:String,
    },
    Uin_DAN:{
        type:String,
    },
    Mobile_Number:{
        type:String,
        
    },
    Authorized_By:{
        type:String,
    },
   Flight_Details:[flightSchema],
   User_Id:{
       type:Schema.ObjectId,
       

   },
    createdAt: {
        type: Date,
        default: Date.now,
      },

})
const OperationLog = mongoose.model("OperationLog", OperationSchema);
  module.exports = { OperationLog };