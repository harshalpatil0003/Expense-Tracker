import Transactions from "../models/Transactions.js";

const posttransactions = async (req, res) => {
    const { title, amount, category, type, user } = req.body
    const transactions = new Transactions({
        title, amount, category, type, user
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
export {
    posttransactions
}