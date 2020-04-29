// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with 
// all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message 
// stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.


let express = require('express')

let app = express()

let data = require('./public/employees.json')



app.get('/test', function(req, res){

    res.send("hello world")
})


app.get('/employees', function(req, res){
    
   if(!data){
       res.status(404).send(`Couldn't find the employees`)
   }

   res.send(data)

})


app.get('/employees/:id', function (req, res){ //access through server. brings back id

    const sData = data.employees.find(function(employee){
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })
    
    if(!sData){
        res.status(404).send(`Couldn't find the employees id`)
    }

    res.send(sData)
 
    
    

}) 



const port = process.env.PORT || 3000;  //env is for personal security 

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

