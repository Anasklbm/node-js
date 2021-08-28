//creating a sample longtask process
//syncronous



    function longtask(millsecondtime){   //creating function for a long task  .....1000 millsecondtime =1 second 
        dt=new Date()  // dt assigns the current date
        while((new Date-dt)<=millsecondtime){   //time 4000 millsecondtime kazhiyumbo loop condition break avum
        
        }
    }

    console.log("started")
    longtask(2000)  //calling log task function and passing 4000 to millsecondtime
    console.log("end")

    console.log("started")
    longtask(2000)  //calling log task function and passing 4000 to millsecondtime
    console.log("end")

    console.log("started")
    longtask(2000)  //calling log task function and passing 4000 to millsecondtime
    console.log("end")