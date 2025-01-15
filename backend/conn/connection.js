const mongoose = require("mongoose");

const conn = async() =>{
    try {
        await mongoose.connect("---mongodab connection link here --------");
        console.log("Connected to DB");
    } catch(error){
        console.log(error);
    }

};

conn();
