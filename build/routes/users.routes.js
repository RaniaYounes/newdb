"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersRouter = (0, express_1.Router)();
usersRouter.get("/", function (req, res) {
    res.send("uses list");
});
usersRouter.get("/:id", function (req, res) {
    res.send("User ".concat(req.params.id));
});
usersRouter.post("/", function (req, res) {
    res.send("create user");
});
exports.default = usersRouter;
