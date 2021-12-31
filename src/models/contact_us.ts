import mongoose, {Schema,Document} from "mongoose"

export interface IContact extends Document{
    id:string
    name:string
    email:string
    number:number
}

let contactSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
       type:String,
    },
    number:{
        type:Number,
    }
})

export default mongoose.model<IContact>("Contact",contactSchema)