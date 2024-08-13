import Transactions from "../models/Transactions.js";
import User from '../models/Usere.js'
const posttransactions = async (req, res) => {
    const { title, amount, category, user, type } = req.body
    const transactions = new Transactions({
        title, amount, category, user, type
    })
    try {
        const savedTransaction = await transactions.save()
        res.json({
            message: "Transaction saved successfully",
            success: true,
            data: savedTransaction

        })
    }
    catch (e) {
        res.json({
            message: "Error saving transaction",
            success: false,
            data: null
        })
    }
}

const getTansactions = async (req, res) => {
    const { userId } = req.query
    const user = await User.findById(userId)
    if (!user) {
        return res.json({
            message: "User not found",
            success: false,
            data: null
        })
    }
    const transactions = await Transactions.find({ user: userId })
    res.json({
        message: "Transactions fetched successfully",
        success: true,
        data: transactions
    })
}
export {
    posttransactions, getTansactions
}