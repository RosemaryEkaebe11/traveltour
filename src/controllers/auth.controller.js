const { where } = require('sequelize');
const { User }= require('../../models')
class AuthController{


    static async createUser(req,res){
        const {name, email, password} = req.body;
        const usr = await User.findOne({
            where: {
                email: email
            }
        })
        if(usr){
            return res.send({
                error: true,
                message : "user already exists"
            })
        }
        const passwordHash = await bcrypt.hash(password,10);
        const user = await User.create({
            name, email, password
        })
        return res.redirect('/')

    }


    static async userExists(email){
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(user);
        return user;
    }

    static async loginUser(){


    }


    static async logoutUser(){


    }
}

module.exports = AuthController;