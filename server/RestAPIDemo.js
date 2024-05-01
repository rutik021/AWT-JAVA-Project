const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./model/Product");
const ContactUs = require("./model/contactUs");
const Admin = require("./model/Admin");
const bodyparser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/tiles").then(
    () => {
        const app = express();
        app.use(express.json());
        app.use(cors());
        app.use(bodyparser.urlencoded({ extended: false }))

        //product collection(table) RestAPI
        app.get("/products", async (req, res) => {
            const data = await Product.find();
            res.send(data);
        });

        app.get("/product/:id", async (req, res) => {
            const data = await Product.findOne({ _id: req.params.id });
            res.send(data);
        });
        app.delete("/product/:id", async (req, res) => {
            const data = await Product.deleteOne({ _id: req.params.id });
            res.send(data);
        });

        app.post("/product", async (req, res) => {
            const pr = new Product();
            // pr._id=req.body._id;
            pr.tname = req.body.tname;
            pr.timage = req.body.timage;
            pr.tdescription = req.body.tdescription;
            pr.tsize = req.body.tsize;
            pr.tpriceperbox = req.body.tpriceperbox;
            pr.tquantityperbox = req.body.tquantityperbox;
            pr.tcatagory = req.body.tcatagory;
            const data = await pr.save();
            res.send(data);
        });

        app.put("/product/:id", async (req, res) => {
            const data = await Product.findOne({ _id: req.params.id });
            // data._id=req.body._id;
            data.tname = req.body.tname;
            data.timage = req.body.timage;
            data.tdescription = req.body.tdescription;
            data.tsize = req.body.tsize;
            data.tpriceperbox = req.body.tpriceperbox;
            data.tquantityperbox = req.body.tquantityperbox;
            data.tcatagory = req.body.tcatagory;
            await data.save();
            res.send(data);
        });


        //admin api
        app.get("/admins", async (req, res) => {
            const data = await Admin.find();
            res.send(data);
        });

        app.get("/admin/:id", async (req, res) => {
            const data = await Admin.findOne({ _id: req.params.id });
            res.send(data);
        });
        app.delete("/admin/:id", async (req, res) => {
            const data = await Contact.deleteOne({ _id: req.params.id });
            res.send(data);
        });
        app.post("/admin", async (req, res) => {
            const ad = new Admin();
            ad.email = req.body.email;
            ad.password = req.body.password;
            const data = await ad.save();
            res.send(data);
        });

        app.post("/contact", async (req, res) => {
            try {
                const { name, email, message } = req.body;
                const newEntry = new ContactUs({ name, email, message });
                await newEntry.save();
                res.status(201).send("Message received successfully!");
            } catch (error) {
                res.status(500).send("Error saving message to database.");
            }
        });


        app.listen(3003, () => {
            console.log("server started at @3003");
        })
    }
)
