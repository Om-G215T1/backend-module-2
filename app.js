import express from "express";

const app = express();

const users = [
    {
        name: "Om Gupta",
        id: 1
    },
    {
        name: "John Doe",
        id : 2
    },
    {
        name: "Jane Doe",
        id : 3
    }
]
app.get('/users/:id', (req, res) => {
res.send("user id is = " + req.params.id);
});

app.get("/", (req, res) => {
    res.send("<h1>Hii this is reponse for / url</h1>"); // this is for sending html response
    //res.send("Hello"); // we can send only one response for one request, so this will not work because we have already sent a response in the previous line
//     res.json({              // this is for sending json response
//         name: "John Doe",
//         age: 30,
//         email: "john.doe@example.com"   
// })
});
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(3000,(error)=>{
    if (error) {
        return
    } else {
        console.log("Server is running on port 3000");
    }
})