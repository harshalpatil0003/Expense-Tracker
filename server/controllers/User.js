import User from '../models/Usere.js'
const postsignin=async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email: email,
        password: password
    })
    if (user) {
        res.status(200).json({
            message: "Login Successful",
            user: user,
            success: true
        })
    }
    else {
        res.status(404).json({
            message: "Invalid Credentials",
            success: false,
            data: null
        })
    }
}

const postsignup=async (req, res) => {
    const { name, email, password, gender } = req.body
    const user = new User({
        name,
        email,
        password,
        gender
    })
    try {
        const saveduser = await user.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: saveduser
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: "Try with different email Id",
            message: e.message,
            data: null
        })
    }

}
export{
    postsignin,postsignup
}