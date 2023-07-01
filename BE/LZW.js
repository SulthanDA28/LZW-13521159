function encode(kalimat,pilihan) {
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
function decode(kalimat,pilihan){
    let list = stringtoArr(kalimat,pilihan);
    if(checkNaN(list)){
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


function stringtoArr(string,pilihan){
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



function RLE_Encode(kalimat){
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

function RLE_Decode(kalimat){
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

function LZW_RLE_Encode(kalimat,pilihan){
    let hasil = encode(kalimat,pilihan);
    let hasil2 = RLE_Encode(hasil);
    return hasil2;
}
function LZW_RLE_Decode(kalimat,pilihan){
    let hasil = RLE_Decode(kalimat);
    let hasil2 = decode(hasil,pilihan);
    return hasil2;
}
function checkNaN(arr){
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            return true;
        }
    }
    return false;
}
let coba = decode("65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 97","decimal");
console.log(coba);
let uh = /^[\d\s]+$/
console.log(uh.test("65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 97 9"));