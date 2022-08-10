const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'please provide title']
    } ,
    desc:{
        type:String,
    } ,
    start_date:{
        type:Date,
        required:[true,'please provide start date']
    } ,
    end_date:{
        type:Date,
        required:[true,'please provide end date']
    } 
    
} , {timestamps:true , toJSON:{virtuals:true}})


//course_status is set to virtual as it is dynamic according to the current date
CourseSchema.virtual('course_status')
    .get( function(date)  {
        const today = new Date()
        if(today>=this.start_date && today<=this.end_date )
            return "ongoing"
        else if(today<this.start_date)
            return "upcoming"
        else
            return "closed"
        
    } )


module.exports = mongoose.model('Course',CourseSchema)