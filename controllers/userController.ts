const { generateToken } = require( "../utils/jwtToken");
const User = require('../model/UserModel')

export const userLogin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.find({
        where: {
            Email: email
        }
        })

        if(user){
            res.send({
                ...user,
                token: generateToken(user.id)
            })
        }
    } catch (error) {
        res.status(500);
        res.send({message: error})
    }
    
}