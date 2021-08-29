//express vech simple ayy webpage host cheyyam


const express=require("express")   //importing express module...const is like var,let


const app=express()             //expressine app enna objectilott eduth


app.get("/",function(req,res){      //oru web request kodukkumbo serveril ninn html page ahnu return varendath..athukond get use cheyyunnu
    res.send("hello")               //hello display cheyyam
})


app.get("/signuppage",function(req,res){      //signuppagilott pokan
    res.send("signuppage")
})



app.listen(3000,function(){               //port set cheyyan
    console.log("server started")        //terminalil server started print chyyan
})