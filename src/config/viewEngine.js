import express from "express";

/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./public'))
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}
export default configViewEngine;