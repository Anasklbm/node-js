var http=require("http")
var fs=require("fs")  //fs is a module to read another file


http.createServer(function (req,res){

    if(req.url==="/"){  //    "/" is used to store url -localhost/7000

    fs.readFile("samplehtml.html",function(err,data){  //Syntax:readFile("filename",callbackfunction(error object,data)

        res.writeHead(200,{"Content-Type":"text/html"})  //200 is a code
        res.write(data)  
        res.end()

    })

    }else if(req.url==="/login"){                             // if the url in login page 
         res.write("This is a login page")                    // display login
         res.end()
    }else{                                                    // if we search otherurl with localhost:7000/..... 
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("error")                                    //display error
        res.end()
    }

    
}).listen(7000)