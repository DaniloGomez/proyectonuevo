const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose")
app.use(express.json({extended:true}))

