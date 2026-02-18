import express from "express";

const app = express();

app.use(express.json());

// app.get('/users/:id', (req, res) => {
// res.send("user id is = " + req.params.id); // handler function
// });

// app.get("/search", (req, res) => {
//     res.status(200).send(req.query);
// }) // handler function

// app.get("/", (req, res) => {
//     res.send("<h1>Hii this is reponse for / url</h1>"); // this is for sending html response
//     //res.send("Hello"); // we can send only one response for one request, so this will not work because we have already sent a response in the previous line
// //     res.json({              // this is for sending json response
// //         name: "John Doe",
// //         age: 30,
// //         email: "john.doe@example.com"   
// // })
// });
import router from "./routes/userRoutes.js";
//GET request 
// to get all users
app.use("/users", router); // this is for parsing json data from the request body(middleware  function)


//POST request
// to create a new user




// name update according to id 
// app.put("/users/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const updatedData = req.body;
//     const userIndex = users.findIndex(users => users.id === id);
//     if (userIndex !== -1) {
//         users[userIndex] = { ...users[userIndex], ...updatedData };
//         res.json({  
//             message: "User updated successfully",
//             data: users[userIndex]
//         });
//     } else {
//         res.status(404).json({ message: "User not found" });
//     }   
// })

app.listen(3000,(error)=>{
    if (error) {
        return
    } else {
        console.log("Server is running on port 3000");
    }
})


