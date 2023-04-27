const Express = require("express");
const Employees = require("./db/employees");
const app = Express();

app.post("/create/employee",(req,res)=>{
    const Employee = new Employees({
        Nom: "mohamed",
        Prenom:"hatim",
        CIN:"js8523",
        Email:"mohamedhatim@ofppt.ma",
        Tel:"0645782315",
        Date: "05/03/1993",
        Type:"formateur",
        Salaire:"5000dh",
        Modules:[5,3,1]
      });
      
      Employee.save()
        .then(() => {
          console.log('Employee saved successfully');
        })
        .catch(err => {
          console.error('Error saving Employee', err);
        });
});


app.listen("3000");