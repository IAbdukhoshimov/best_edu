import mongoose, {Schema,Document} from "mongoose"

export interface ISend extends Document{
    id:string
    name:string
    email:string
    text:string
}

let sendSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
       type:String,
    },
    text:{
        type:String,
    }
})

export default mongoose.model<ISend>("Send",sendSchema)