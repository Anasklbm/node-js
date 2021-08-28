// Listen 7000: server run time terminalil started ennu display cheyyan


var http=require("http")
var fs=require("fs")  //fs is a module to read another file


http.createServer(function (req,res){

    fs.readFile("samplehtml.html",function(err,data){  //Syntax:readFile("filename",callbackfunction(error object,data)
        res.writeHead(200,{"Content-Type":"text/html"})  //200 is a code
        res.write(data)  
        res.end()

    })
    
}).listen(7000 , function(){         //running timil terminalil started ennu print chyyan
    console.log("server started")
})