import mongoose, {Schema} from "mongoose";

const issueSchema = new Schema(
    {
        issue: {
            type: String,
            required: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        description : {
            type: String,
            trim: true, 
        },
        address : {
            type: String,
            trim: true, 
            required : true
        },
        requireDepartment : {
            type: String,
            trim: true, 
            required : true
        },
        complete :{
            type : Boolean,
            default:false
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        // timestapms removed and added in string format
        createdAt : {
            type : String
        },
        updatedAt : {
            type : String
        }

    }
    
)

export const Issue = mongoose.model("Issue",issueSchema)