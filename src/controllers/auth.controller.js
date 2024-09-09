const { where } = require('sequelize');
const { User }= require('../../models')
const bcrypt = require('bcrypt');


class AuthController{




    static async createUser(req,res){
        const {name, email, password} = req.body;

        const usr = await User.findOne({
            where: {
                email: email
            }
        })

        if(usr){
            res.setHeader("Content-Type",'text/html')
            return res.send("<b>A user with this email already exist</b>")
        }
        const passwordHash = await bcrypt.hash(password,10);
        const user = await User.create({
            name, email, password: passwordHash
        })
        req.session.user = user;
        req.session.isAuthenticated = true;

        return res.redirect('/profile')

    }

    static async loginUser(req,res){
        const { email, password } = req.body;
        const user = await User.findOne({
            where:{
                email
            }
        });
        if(user){
            const hashedPassword = user.dataValues.password;
            const passwordsMatch = await bcrypt.compare(password,hashedPassword)
            if(passwordsMatch){
                req.session.user = user;
                req.session.isAuthenticated = true;
                return res.redirect('/dashboard');
            }

            
        }
        return res.render("error",{
            layout: "index",
            path: "/",
            message: "Incorrect user name or password"
        })
    }

    static async userExists(email){

        console.log(usr)
        
        if(usr !== null){
            return true;
        }
        return false;
        
    }
    static async logoutUser(req,res){
        req.session.destroy((err) => {
            if (err) {
                return res.redirect('/dashboard');
            }
            res.redirect('/login');
        });
    }
}

module.exports = AuthController;