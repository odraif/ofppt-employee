const Express = require("express");
const Employees = require("./db/employees");
const app = Express();

app.post("/create/employee", (req, res) => {
    if (!req.body) {
        return res.json({ message: "request error" });
    } else {
        const { Nom, Prenom, CIN, Email, Tel, Date, Type, Salaire, Modules } = req.body;
        const newEmployee = new Employees({
            Nom,
            Prenom,
            CIN,
            Email,
            Tel,
            Date,
            Type,
            Salaire,
            Modules
        });
        newEmployee.save()
            .then(() => {
                console.log('Employee saved successfully');
            })
            .catch(err => {
                console.error('Error saving Employee', err);
            });
    }
});

app.listen("3000");