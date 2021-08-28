//Asyncronous


function longtask(millsecondtime){   //creating function for a long task  .....1000 millsecondtime =1 second 
    dt=new Date()  // dt assigns the current time
    while((new Date-dt)<=millsecondtime){   //time 2000 millsecondtime kazhiyumbo loop condition break avum
    
    }
}

function showEnd(){   //creating function to show the end 
    console.log('end')
}


console.log("started")
setTimeout(showEnd,2000)  //settimeout is a asyncronous function (function name,time)........call showend after 2000millsecondtime


console.log("started")   //starting the statement without processing showend
setTimeout(showEnd,2000)  //settimeout is a asyncronous function (function name,time)........call showend after 2000millsecondtime

console.log("started")  ////starting the statement without processing showend
setTimeout(showEnd,2000)  //settimeout is a asyncronous function (function name,time)........call showend after 2000millsecondtime
