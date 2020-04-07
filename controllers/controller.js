const db = require("../models/db.js");
const User = require("../models/UserModel.js");

const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `home.hbs` with all contacts
            current stored in the database.
    */
    getIndex: function (req, res) {
        // your code here
        db.findMany(User, {}, null, (data) => {
            res.render("home", { data: data }); // This is to load the page initially
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckNumber`. This function checks if a
            specific number is stored in the database. If the number is
            stored in the database, it returns an object containing the
            number, otherwise, it returns an empty string.
    */
    getCheckNumber: function (req, res) {
        // your code here
        db.findOne(User, { number: req.query.q }, null, (data) => {
            res.send(data);
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the contact sent
            by the client to the database, then appends the new contact to the
            list of contacts in `home.hbs`.
    */
    getAdd: function (req, res) {
        // your code here
        db.insertOne(User, req.query, (data) => {
            res.render('./partials/card', req.query, (err, html) => {
                res.send(html);
            });
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the contact
            from the database, then removes the contact to the list of
            contacts in `home.hbs`.
    */
    getDelete: function (req, res) {
        // your code here
        db.deleteOne(User, req.query, (data) => {
            res.send(data);
        });
    },
};

module.exports = controller;
