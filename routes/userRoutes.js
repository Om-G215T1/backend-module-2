import express from "express";

const router = express.Router();
let users = [
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

//Get all users
router.get("/getAllUsers", (req,res) => {
    res.json(users);
})


router.post("/createUser", (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    users.push(newUser);
    res.json({
        message: "New User created successfully",
        data:newUser
    });
});


//PUT request
// to update existing user
router.put("/updateUsers/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    console.log("Id is = " + id);
    console.log(updatedData);

    users.forEach((user) => {
        if (user.id == id) {
            user.name = updatedData.name;
        }
    });

    res.json(users);
});

//DELETE REQUEST
//to delete a user
router.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    const updatedUsers = users.filter((user) => user.id != id);
    users = updatedUsers; // update the users array with the filtered result
    console.log(updatedUsers);
    res.json(updatedUsers);
})

export default router;