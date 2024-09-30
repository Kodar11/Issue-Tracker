import mongoose, {Schema} from "mongoose";

const responseSchema = new Schema(
    {
        issueId: {
            type: Schema.Types.ObjectId,
            ref: "Issue"
        },
        description : {
            type: String,
            default:"",
            trim: true, 
        },
        requirements : {
            type: String,
            default:"",
            trim: true, 
        },
        actionTaken : {
            type: String,
            default:"",
            trim: true, 
        },
        complete :{
            type : Boolean,
            default:false
        },
        aknowledge_at : {
            type: String,
            default:"",
        },
        // timestapms removed and added in string format
        createdAt : {
            type : String
        },
        updatedAt : {
            type : String
        }

    },
    
)

export const Response = mongoose.model("Response",responseSchema)