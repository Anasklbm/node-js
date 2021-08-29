//html file kodkkam
//"__dirname" - file path kittan
//"__filename" -file name with pathssss

const express=require("express")   //importing express module...const is like var,let
const app=express()                //expressine app enna objectilott eduth

const path=require("path")       //path libarary

//app.use(function(req,res,next){         //req varumbozhum responce pokumbozhm work cheyyan
//    console.log("form submitted")
//   next()
//   })


app.get("/",function(req,res){      //oru web request kodukkumbo serveril ninn html page ahnu return varendath..athukond get use cheyyunnu
    res.send("hello")               //hello display cheyyam
})



app.get("/signup",function(req,res){                       //signuppage enna html page load cheyyan
    res.sendFile(path.join(__dirname,"signup.html"))     //filepath : "__dirname" vech folder vare ulla path edukkunnu,signuppage.html
})                                                             // eg : C:\node js_express,signuppage.html
                                                               //path.join use cheyth path join cheyyunnu



app.post("/signup",function(req,res){                      //data submit cheyyumbol post method use cheyyum..html pagil formil method post akkanam
    res.send("Accound created")
})



app.listen(3000,function(){               //port set cheyyan
    //console.log(__dirname)                 //file path aryan --  "__dirname"  eg : C:\node js_express
  //  console.log(__filename)                //file name with path  eg:  C:\node js_express\express_html.js
    console.log("server started")        //terminalil server started print chyyan 
})

