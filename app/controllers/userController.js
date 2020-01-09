const db = require('../config/database');
const User = require('../models/user.model');
const shortid = require('shortid');
var bodyParser = require('body-parser');
module.exports = {
    list: async (req,res)=>{
        let users = await User.find();
        res.render("user/listUser", {users: users});
    },
    search: function(req,res){
        
        var q = req.query.q;
        console.log(q);
        // var matchedUsers =  users.filter(function(user){
        //     return user.name.toLowerCase().indexOf(q.toLowerCase) !==-1;
        // });
        // res.render('',{
        //     users: matchedUsers
        // });
    },
    post : function(req, res){
        if(req.body._id == '')
            insertRecord(req,res);
    },
    insertRecord :  function(req,res){
        var user = new User();
        user.name =  req.body.name;
        user.age = req.body.age;
        user.save((err,doc)=>{
            if(!err)
                res.redirect('user/listUser');
            else
                if(err.name == "ValidationError"){
                    handleValidationError(err,req.body);
                    res.render("user/createUser",{
                        user = req.body
                    })
                }
                else
                    console.log('error');

        });
    },
//     create : function(req, res){
//         res.render("user/createUser");
//     },
//      postCreate : async(req,res)=>{
//         let users = await User.insertOne();
//         req.body.is = shortid.generate();
//         db.get('users').push(req.body).write();
//         res.redirect('./listUser');
//    }
}


// module.exports = {
    
//     list: async (req,res)=>{
//         let users = await User.find();
//         res.render("user/listUser", {users: users});
//     }// trar veef 1 promise

//     // list: (req, res) => {
//     //     let users = User.find(function (err, user) {
//     //         if (err) {
//     //             res.send(err)
//     //         }
//     //         console.log(user);
//     //         res.render("user/listUser", { users: user });
//     //     })
//     // }
// }