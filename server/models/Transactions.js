import { Schema, model } from "mongoose";

const transSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        default: others
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
