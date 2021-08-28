var http=require("http")   //   "http" is a module and is assigned to http variable

http.createServer(server).listen(7000)  //createServer is a fuction and listen(7000) is used to set 7000 as a port.We can call the project using 7000
                                        //server function is passing as callback
                           
function server(req,res) {   //create function server,req and res are arguments..req is used to get system details.

    res.write("welcome")      //request object and responce object
    res.end()                 //res.end is used to stop working the page
} 

