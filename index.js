const express = require("express");
const users = require("./MOCK_DATA.json");
let fs = require("fs");

const app = express();

const PORT = 3000;

// MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

app.get("/api/users/:id", (req, res) => {
    const id = +req.params.id;
    const user = users.find((user) => user.id === id);
    res.json(user);
});

// POST 
app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
            console.error("Error writing to file: ", err);
        } else {
            res.json({ status: "PENGING" });
        }
    });
});


// Start the server
app.listen(PORT, (req, res) => {
    console.log(`Server Started at the port ${PORT}`);
});
