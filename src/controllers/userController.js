const express = require("express");

module.exports = {
    index : (req, res)=>{
        res.status(200).render("pages/index");
    },
};