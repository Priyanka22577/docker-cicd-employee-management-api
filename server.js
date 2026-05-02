const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/employees")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Employee = mongoose.model("Employee", {
    name: String,
    department: String,
    salary: Number
});

app.post("/employee", async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.send(employee);
});

app.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
});

app.put("/employee/:id", async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.send(employee);
});

app.delete("/employee/:id", async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send("Employee Deleted");
});

app.get("/", (req, res) => {
    res.send("Employee API Running");
});

app.listen(3008, () => {
    console.log("Server running on port 3008");
});