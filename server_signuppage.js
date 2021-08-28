// creating a new signup page as a root of the page... 
//signup pagila values edkkan ...

//GET -data get cheyyan
//POST -data servilott send cheyan ollath
//PUT -data sendum cheyyum avda servila ubdatum cheyyum
//DELETE -Delete chehyan





var http=require("http")
var fs=require("fs")  //fs is a module to read another file
var url=require("url")  //url is a module


http.createServer(function (req,res){

    var q=url.parse(req.url,true)          //  req.url  il olla content ful q.url ilott vechu
                                           //pathname : eg:/signuppage , login .


    if(q.pathname==="/"){  //    "/" is used to store url -localhost/7000

    fs.readFile("samplehtml.html",function(err,data){  //Syntax:readFile("filename",callbackfunction(error object,data)

        res.writeHead(200,{"Content-Type":"text/html"})  //200 is a code
        res.write(data)  
        res.end()

    })

    }else if(q.pathname==="/login"){                             // if the url in login page 
         res.write("This is a login page")                    // display login
         res.end()


        }else if(q.pathname==="/signup"){                             // if the url in signup page 
            fs.readFile("signup.html",function(err,data){       //Syntax:readFile("filename",callbackfunction(error object,data)

                res.writeHead(200,{"Content-Type":"text/html"})  //200 is a code
                res.write(data)  
                res.end()
            })

        }else if(q.pathname==="/signupaction"){                             // if the url in signupaction..signupaction submit click chyyumbol work avum
            
                //console.log(q.query)  //....terminalil signup pagila values varum
               // console.log(q.query.firstname)  ...signup pagila firstname value edkkan


                res.write("<h1>first name   : "+q.query.firstname+"</h1>")     //userinu rsponce kodkkanam...firstname="anas"
                res.write("<h1>Address   : "+q.query.address+"</h1>")
                res.write("<h1>Usernames   : "+q.query.username+"</h1>")
                res.end()
            



    }else{                                                    // if we search otherurl with localhost:7000/..... 
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("error")                                    //display error
        res.end()
    }

    
}).listen(7000)