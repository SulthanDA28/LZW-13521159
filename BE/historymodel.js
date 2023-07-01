const mongoose = require('mongoose');

const historySchema = mongoose.Schema(
    {
        tipecompress : {
            type : String,
            required : true
        },
        input : {
            type : String,
            required : true
        },
        pilihan : {
            type : String,
            required : true
        },
        output : {
            type : String,
            required : true
        },
        algoritma : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

const History = mongoose.model('History', historySchema);
module.exports = History;