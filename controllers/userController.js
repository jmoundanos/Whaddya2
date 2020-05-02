const db = require("../models");

module.exports={
    findAll: function(req, res){
        db.User.find(req.query)
        .sort({_id: -1})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    findById: function(req, res){
        db.User.find({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    create: function(req, res){
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    update: function(req, res){
        db.User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    remove: function(req, res){
        db.User.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    }
}