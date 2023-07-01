const express = require('express');
const History = require('./historymodel');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.json()); 
app.use(express.json())
app.get('/gethistory', async (req, res) => {
    try{
        const history = await History.find({});
        res.send(history);

    }catch(err){
        res.status(500).json({message : err});
    }
}
);
app.delete('/deletehistory', async (req, res) => {
    try{
        const history = await History.deleteMany({});
        res.send(history);
    }catch(err){
        res.status(500).json({message : err});
    }
}
);

app.post('/encode/LZW', async (req, res) => {
    try{
        let coba = {
            "tipecompress" : "Encode",
            "input" : req.body.input,
            "pilihan" : req.body.pilihan,
            "output" : encode(req.body.input,req.body.pilihan),
            "algoritma" : "LZW"
        };
        const history = await History.create(coba);
        res.send(coba.output);
    }catch(err){
        res.status(500).json({message : err});
    }

});
app.post('/decode/LZW', async (req, res) => {
    try{
        let coba = {
            "tipecompress" : "Decode",
            "input" : req.body.input,
            "pilihan" : req.body.pilihan,
            "output" : decode(req.body.input,req.body.pilihan),
            "algoritma" : "LZW"
        };
        if(coba.output == false){
            res.status(500).json({message : "Input harus berupa angka!"});
        }else{
            const history = await History.create(coba);
            res.send(coba.output);
        }
    }catch(err){
        res.status(500).json({message : err});
    }

});
app.post('/encode/LZW_RLE', async (req, res) => {
    try{
        let coba = {
            "tipecompress" : "Encode",
            "input" : req.body.input,
            "pilihan" : req.body.pilihan,
            "output" : LZW_RLE_Encode(req.body.input,req.body.pilihan),
            "algoritma" : "LZW+RLE"
        };
        const history = await History.create(coba);
        res.send(coba.output);
    }catch(err){
        res.status(500).json({message : err});
    }

});
app.post('/decode/LZW_RLE', async (req, res) => {
    try{
        let coba = {
            "tipecompress" : "Decode",
            "input" : req.body.input,
            "pilihan" : req.body.pilihan,
            "output" : LZW_RLE_Decode(req.body.input,req.body.pilihan),
            "algoritma" : "LZW+RLE"
        };
        if(coba.output == false){
            res.status(500).json({message : "Input harus berupa angka!"});
        }else{
            const history = await History.create(coba);
            res.send(coba.output);
        }
    }catch(err){
        res.status(500).json({message : err});
    }

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);


mongoose.connect('mongodb+srv://13521159:wg6YEqeKOxkpEsQc@history.bbssjie.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {console.log('Connected to MongoDB...')})
.catch(err => {console.error('Could not connect to MongoDB...')});

const encode = (kalimat,pilihan) => {
    let kamus = new Map();
    let hasil = [];
    let semua = 256;
    for (let i = 0; i < semua; i++) {
        kamus.set(String.fromCharCode(i), i);
    }
    let string = "";
    for (let i = 0; i < kalimat.length; i++) {
        let c = kalimat[i];
        let stringPlusC = string + c;
        if (kamus.has(stringPlusC)) {
            string = stringPlusC;
        } else {
            hasil.push(kamus.get(string));
            kamus.set(stringPlusC, semua++);
            string = "" + c;
        }
    }
    if (string != "") {
        hasil.push(kamus.get(string));
    }
    let hasilakhir = "";
    if(pilihan == "binary"){
    for (let i = 0; i < hasil.length; i++) {
        hasilakhir += hasil[i].toString(2) + " ";
    }
    }else{
        for (let i = 0; i < hasil.length; i++) {
            hasilakhir += hasil[i] + " ";
        }
    }
    return hasilakhir;
}
const decode = (kalimat,pilihan)=>{
    let list = stringtoArr(kalimat,pilihan);
    const decimal = /^[\d\s]+$/;
    if(checkNaN(list) || decimal.test(kalimat)==false){
        return false;
    }
    else{
        let kamus = new Map();
        let semua = 256;
        for (let i = 0; i < semua; i++) {
            kamus.set(i,String.fromCharCode(i));
        }
        let hasil = "";
        let string = "" + kamus.get(list[0]);
        let c = "";
        for (let i = 0; i < list.length; i++) {
            let k = list[i];
            if (kamus.has(k)) {
                c = kamus.get(k);
            } else {
                c = string + string[0];
            }
            hasil += c;
            if(i>0){
                kamus.set(semua++, string + c[0]);
            }
            string = c;
        }
        return hasil;
    }
    
}


const stringtoArr = (string,pilihan)=>{
    let arrint = [];
    if(pilihan == "binary"){
        let arrstring = string.split(" ");
        for (let i = 0; i < arrstring.length; i++) {
            if(arrstring[i] == ""){
                continue;
            }
            arrint.push(parseInt(arrstring[i],2));
        }
    }else{
        let arrstring = string.split(" ");
        for (let i = 0; i < arrstring.length; i++) {
            if(arrstring[i] == ""){
                continue;
            }
            arrint.push(parseInt(arrstring[i]));
        }
    }
    
    return arrint;
}



const RLE_Encode = (kalimat)=>{
    let hasil = "";
    let count = 1;
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == kalimat[i + 1]) {
            count++;
        }else if(kalimat[i] == " "){
            hasil += kalimat[i];
        } 
        else {
            hasil += kalimat[i] + count;
            count = 1;
        }
    }
    return hasil;
}

const RLE_Decode = (kalimat)=>{
    let hasil = "";
    let count = 1;
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] == " "){
            hasil += kalimat[i];
            count = 1;
        }else if(kalimat[i+1]==" "){
            continue;
        }
        else if(count%2==0){
            count++;
        }
        else if(count%2==1){
            for(let j=0;j<parseInt(kalimat[i+1]);j++){
                hasil += kalimat[i];
            }
            count++;
        }
    }
    return hasil;
}

const LZW_RLE_Encode = (kalimat,pilihan)=>{
    let hasil = encode(kalimat,pilihan);
    let hasil2 = RLE_Encode(hasil);
    return hasil2;
}
const LZW_RLE_Decode = (kalimat,pilihan)=>{
    const decimal = /^[\d\s]+$/;
    if(decimal.test(kalimat)==false){
        return false;
    }
    else{
        let hasil = RLE_Decode(kalimat);
        let hasil2 = decode(hasil,pilihan);
        return hasil2;
    }
}
const checkNaN = (arr)=>{
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            return true;
        }
    }
    return false;
}

