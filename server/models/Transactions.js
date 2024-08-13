import { Schema, model } from "mongoose";

const transSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
    },
    type: {
        type: String,
        required: true,
        enum:["Credit", "Debit"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},{
    timestamps:true
})
export default model('Transactions', transSchema);
