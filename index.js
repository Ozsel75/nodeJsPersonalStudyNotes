const fs = require("fs");

// DOSYA OKUMAK

fs.readFile("./password.txt", "utf8", (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
    console.log("Dosya okundu");
})

// DOSYA YAZMAK

fs.writeFile("example.txt", "Deneme", "utf8", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Dosya Oluşturuldu")
})


// VERİ EKLEMEK

fs.appendFile("example.txt", "\n Deneme ekleme", "utf8", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Dosyaya veri eklendi")
})

// DOSYA SİLMEK

fs.unlink("example.txt", (err)=>{
    if(err)console.log(err)
    console.log("Dosya Silindi")
})


// KLASÖR OLUŞTURMA

fs.mkdir("uploads/img", {recursive : true}, (err)=>{    // recursive alt klasörler şeklinde oluşturmaya izin veriyor
    if(err)console.log(err);
    console.log("Klasör Oluşturuldu")
})


// KLASÖR SİLMEK

fs.rmdir("uploads/img", {recursive : true}, (err)=>{    // recursive alt klasörler şeklinde oluşturmaya izin veriyor
    if(err)console.log(err);
    console.log("Klasörler silindi")
})