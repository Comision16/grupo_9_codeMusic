const {loadUsers, storeUsers} = require('../data/usersModule');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

module.exports = {
    register: (req,res) => {
        return res.render('users/register', {
            title: 'Register'
        })
    },
    
    login: (req,res) => {
        return res.render('users/login', {
            title: 'Login'
        })
    },

    processRegister: (req, res)=> {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            const {firstName,lastName,email,telephone,password} = req.body;
            let users = loadUsers();
            
            let newUser = {
                id : users.length > 0 ? users[users.length - 1].id + 1 : 1,
                firstName :firstName,
                lastName : lastName,
                email : email,
                telephone: +telephone,
                password : bcryptjs.hashSync(password,12),
                category: "user",
                image : "default-users-image.jpg"
            }
            
            let usersModify = [...users, newUser];
            
            storeUsers(usersModify);
            
            return res.redirect('/users/login');
        }else{
            return res.render('users/register',{
                title: 'Register',
                errors : errors.mapped(),
                old : req.body
            })
        }
    } 
    /* processLogin: (req,res) => {
        let errors = validationResult(req);
        return res.send(req.body)
    
        if(errors.isEmpy()) {
            let {id, name, username} = loadUsers().find(user = user.email === req.body.email)
            
            return res.redirect('/')
        } else {
            return res.render('/login', {
                title : 'login',
                errors : errors.maped()
            })
        }
    }, */

}
